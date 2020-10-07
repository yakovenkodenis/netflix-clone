import React, { useContext, useState, useEffect } from 'react';

import { SelectProfileContainer } from './Profiles';
import { Card, Header, Loading } from '../components';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from './Footer';

export default function BrowseContaier({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return function cleanup() {
            clearTimeout(timeout);
        };
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
        return function cleanup() {};
    }, [slides, category]);

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src={'joker1'} dontShowOnSmallViewport>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo
                            to={ROUTES.HOME}
                            src={logo}
                            alt="Netflix"
                        />
                        <Header.TextLink
                            active={category === 'series'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === 'films'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>
                                        {user.displayName}
                                    </Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign Out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallout>
                        Watch Joker Now
                    </Header.FeatureCallout>
                    <Header.Text className="Text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nostrum vel incidunt temporibus minima odit
                        voluptate quis sed facilis repellendus ex, aperiam
                        dolorum aspernatur laboriosam voluptatem, voluptates a,
                        dolorem tempore fugiat.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slide) => (
                    <Card key={`${category}-${slide.title.toLowerCase()}`}>
                        <Card.Title>{slide.title}</Card.Title>
                        <Card.Entities>
                            {slide.data.map((item) => (
                                <Card.Item key={item.id} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.Subtitle>
                                            {item.title}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <p>Hello</p>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}

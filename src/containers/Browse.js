import React, { useContext, useState, useEffect } from 'react';

import { SelectProfileContainer } from './Profiles';
import { Header, Loading } from '../components';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from './Footer';

export default function BrowseContaier({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return function cleanup() {
            clearTimeout(timeout);
        };
    }, [profile.displayName]);

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
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Films</Header.TextLink>
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
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}

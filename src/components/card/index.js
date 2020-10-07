import React, { useState, useContext } from 'react';

import { CardFeatureContext } from '../../context/cardFeature';

import {
    Container,
    Content,
    Title,
    Subtitle,
    Text,
    Meta,
    Item,
    Group,
    Image,
    Entities,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
} from './styles/card';

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <CardFeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <Container {...restProps}>{children}</Container>
        </CardFeatureContext.Provider>
    );
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(
        CardFeatureContext
    );
    return showFeature ? (
        <Feature
            {...restProps}
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
        >
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12
                            ? 'PG'
                            : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() +
                            itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(CardFeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
};

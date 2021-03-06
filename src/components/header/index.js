import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    Text,
    FeatureCallout,
    Link,
    Group,
    Picture,
    Profile,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton,
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
            >
                <img src="/images/icons/search.png" alt="Search" />
                <SearchInput
                    value={searchTerm}
                    onChange={({ target: { value } }) => setSearchTerm(value)}
                    placeholder="Search films and series"
                    active={searchActive}
                />
            </SearchIcon>
        </Search>
    );
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallout = function HeaderFeatureCallout({
    children,
    ...restProps
}) {
    return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

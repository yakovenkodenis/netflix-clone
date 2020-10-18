import React from 'react';
import { render } from '@testing-library/react';

import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders the <Profiles /> with populated data', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item onClick={() => {}}>
                        <Profiles.Picture
                            src={'/images/whatever.jpg'}
                            data-testid="profile-picture"
                        />
                        <Profiles.Name>Test Name</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
                <Profiles.User data-testid="user-stub" />
            </Profiles>
        );

        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByText('Test Name')).toBeTruthy();
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByTestId('user-stub')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Profiles /> with populated data but misc profile image', () => {
        const { container, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item onClick={() => {}}>
                        <Profiles.Picture
                            src={null}
                            data-testid="profile-picture-misc"
                        />
                        <Profiles.Name>Test Name</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        );

        expect(getByTestId('profile-picture-misc')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});

import React from 'react';
import { render } from '@testing-library/react';

import { Feature } from '../../components';

describe('<Feature />', () => {
    it('renders the <Feature /> with populated data', () => {
        const { container, getByText } = render(
            <Feature>
                <Feature.Title>Unlimited films</Feature.Title>
                <Feature.SubTitle>Watch anywhere</Feature.SubTitle>
            </Feature>
        );

        expect(getByText('Unlimited films')).toBeTruthy();
        expect(getByText('Watch anywhere')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Feature /> with just a title', () => {
        const { container, queryByText, getByText } = render(
            <Feature>
                <Feature.Title>Unlimited films</Feature.Title>
            </Feature>
        );

        expect(getByText('Unlimited films')).toBeTruthy();
        expect(queryByText('Watch anywhere')).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Feature /> with just a subtitle', () => {
        const { container, queryByText, getByText } = render(
            <Feature>
                <Feature.SubTitle>Watch anywhere</Feature.SubTitle>
            </Feature>
        );

        expect(queryByText('Unlimited films')).toBeFalsy();
        expect(getByText('Watch anywhere')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });
});

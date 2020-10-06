import React from 'react';

import {
    Container,
    Base,
    Error,
    Title,
    Text,
    TextSmall,
    Link,
    Input,
    Submit,
} from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Base = function BaseForm({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
};

Form.Title = function TitleForm({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Form.TextSmall = function TextSmallForm({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Text = function TextForm({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Form.Link = function LinkForm({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Form.Input = function InputForm({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function SubmitForm({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
};

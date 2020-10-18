import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';

import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');

    const isInvalid =
        firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5 + 1),
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    });
            })
            .catch((error) => {
                setFirstName('');
                setPassword('');
                setEmailAddress('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            type="text"
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            type="email"
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            autoComplete="off"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit
                            disabled={isInvalid}
                            type="submit"
                            data-testid="sign-up"
                        >
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already on Netflix?{' '}
                        <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './SignUp.module.scss';

const SignUp = () => {
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [userDetails, setUserDetails] = useState({
        userName: '',
        email: '',
        password: '',
        pwdConfirm: '',
    });

    const validator = require('validator');

    const onChange = (event) => {
        const field = event.target.name;
        userDetails[field] = event.target.value;
        setUserDetails({
            ...userDetails,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        var payload = validateSignUpForm(userDetails);
        if (payload.success) {
            setErrors({});
            var userData = {
                usr: userDetails.userName,
                pw: userDetails.password,
                email: userDetails.email,
            };
            console.log('SIGN UP SUCCESSFULL');
        } else {
            const errors = payload.errors;
            setErrorMessage(payload.message);
            setErrors({
                ...errors,
            });
        }
    };

    const validateSignUpForm = (payload) => {
        const errors = {};
        let message = '';
        let isFormValid = true;

        if (
            !payload ||
            typeof payload.userName !== 'string' ||
            payload.userName.trim().length === 0
        ) {
            isFormValid = false;
            errors.userName = 'Please provide a user name.';
        }

        if (
            !payload ||
            typeof payload.email !== 'string' ||
            !validator.isEmail(payload.email)
        ) {
            isFormValid = false;
            errors.email = 'Please provide a correct email address.';
        }

        if (
            !payload ||
            typeof payload.password !== 'string' ||
            payload.password.trim().length < 8
        ) {
            isFormValid = false;
            errors.password = 'Password must have at least 8 characters.';
        }

        if (!payload || payload.pwdConfirm !== payload.password) {
            isFormValid = false;
            errors.pwdConfirm = "Password confirmation doesn't match.";
        }

        if (!isFormValid) {
            message = 'Check the form for errors.';
        }

        return {
            success: isFormValid,
            message,
            errors,
        };
    };

    return (
        <div className={styles['sign-up']}>
            <h1>Register here</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={onSubmit}>
                <TextField
                    value={userDetails.username}
                    onChange={onChange}
                    error={!!errors.username}
                    required
                    id="userNameTextField"
                    label="Username"
                    margin="normal"
                    name="userName"
                    style={{ width: '80%' }}
                />
                <TextField
                    error={!!errors.email}
                    label="Email"
                    id="emailTextField"
                    onChange={onChange}
                    required
                    value={userDetails.email}
                    margin="normal"
                    name="email"
                    style={{ width: '80%' }}
                />
                <TextField
                    autoComplete="current-password"
                    type="password"
                    label="Password"
                    value={userDetails.password}
                    onChange={onChange}
                    error={!!errors.password}
                    id="passwordTextField"
                    margin="normal"
                    name="password"
                    style={{ width: '80%' }}
                    required
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    value={userDetails.pwdConfirm}
                    onChange={onChange}
                    error={!!errors.pwdConfirm}
                    margin="normal"
                    name="pwdConfirm"
                    id="confirmPassordTextField"
                    style={{ width: '80%' }}
                    required
                />
                <br />
                <Button
                    className={styles['submit']}
                    variant="outlined"
                    type="submit"
                    label="Submit"
                    style={{ width: '40%' }}
                >
                    Submit
                </Button>
            </form>
            <p>
                Aleady have an account? <br />
                <a href="/login">Log In here</a>
            </p>
        </div>
    );
};

export default SignUp;

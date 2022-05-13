import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
    let navigate = useNavigate();

    const loadPage = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className={styles['header']}>
                <h2
                    onClick={() => {
                        loadPage('/about');
                    }}
                >
                    ABOUT
                </h2>
                <h2
                    onClick={() => {
                        loadPage('/login');
                    }}
                >
                    LOGIN
                </h2>
            </div>
            <div className={styles['body']}>
                <div className={styles['title']}>CALORIE DOCTOR</div>
                <div className={styles['sub-title']}>
                    <h2>
                        Calculate optimal macronutrient ratios of your body{' '}
                    </h2>
                    <h2>Track your calorie intake per daily meals.</h2>
                </div>
            </div>
            <div className={styles['footer']}>
                <Button
                    variant="contained"
                    size="large"
                    style={{ background: '#AAC46D', color: '#FFFFFF' }}
                    onClick={() => {
                        loadPage('/signUp');
                    }}
                >
                    SIGN UP
                </Button>
            </div>
        </>
    );
};

export default LandingPage;

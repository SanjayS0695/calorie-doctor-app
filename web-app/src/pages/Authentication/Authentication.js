import React from 'react';
import PropTypes from 'prop-types';
import LandingPage from './Landing/LandingPage';
import SignUp from './SignUp/SignUp';
import About from './About/About';
import Login from './Login/Login';
import styles from './Authentication.module.scss';

const Authentication = ({ currentPage }) => {
    return (
        <div className={styles['main-container']}>
            {currentPage === '' && <LandingPage></LandingPage>}
            {currentPage === 'signUp' && <SignUp></SignUp>}
            {currentPage === 'login' && <Login></Login>}
            {currentPage === 'about' && <About></About>}
        </div>
    );
};

Authentication.proptypes = {
    currentPage: PropTypes.string,
};

Authentication.defaultProps = {
    currentPage: '',
};

export default Authentication;

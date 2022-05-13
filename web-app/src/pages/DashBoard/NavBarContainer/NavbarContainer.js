import React from 'react';
import DateBarComponent from '../../../components/DateBarComponent/DateBarComponent';
import UserProfileHeaderComponent from '../../../components/UserProfileComponent/UserProfileHeaderComponent';
import styles from './NavBarContainer.module.scss';

const NavBarContainer = () => {
    return (
        <div className={styles['nav-bar-container']}>
            <DateBarComponent></DateBarComponent>
            <div className={styles['user-profile-header-container']}>
                <UserProfileHeaderComponent></UserProfileHeaderComponent>
            </div>
        </div>
    );
};

export default NavBarContainer;

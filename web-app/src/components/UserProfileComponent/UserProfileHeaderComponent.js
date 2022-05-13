import React, { useState } from 'react';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import userImage from '../../assets/images/userProfile.jpg';
import styles from './UserProfileHeaderComponent.module.scss';

const UserProfileHeaderComponent = () => {
    const [selected, setSelected] = useState(false);

    const handleProfileIcon = () => {
        setSelected(!selected);
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['profile-header-wrapper']}>
                <h3> WILL SMITH </h3>
                <div
                    className={styles['profile-icon']}
                    onClick={handleProfileIcon}
                >
                    <img src={userImage} />
                </div>
            </div>
            <div className={styles[`menu${selected ? '-selected' : ''}`]}>
                <h3> Current Weight: 87kg </h3>
                <ul>
                    <li>
                        <AccountBoxRoundedIcon />
                        <span>My Account</span>
                    </li>
                    <li>
                        <ModeEditTwoToneIcon />
                        <span>Edit Account</span>
                    </li>
                    <li>
                        <LogoutTwoToneIcon />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserProfileHeaderComponent;

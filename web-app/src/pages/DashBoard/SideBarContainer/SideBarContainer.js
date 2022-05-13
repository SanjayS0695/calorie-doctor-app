import React from 'react';
import logo from '../../../assets/images/logo.png';
import styles from './SideBarContainer.module.scss';

const SideBarContainer = () => {
    return (
        <div className={styles['side-bar-container']}>
            {/* <div className={styles['logo']}></div> */}
            <div className={styles['logo']}>
                <img src={logo}></img>
            </div>
        </div>
    );
};

export default SideBarContainer;

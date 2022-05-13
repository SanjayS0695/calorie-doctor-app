import React from 'react';
import { Provider } from 'react-redux';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NavBarContainer from './NavBarContainer/NavbarContainer';
import BodyContainer from './BodyContainer/BodyContainer';
import store from '../../store';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <Provider store={store}>
            <div className={styles['main-container']}>
                <SideBarContainer></SideBarContainer>
                <NavBarContainer></NavBarContainer>
                <BodyContainer></BodyContainer>
            </div>
        </Provider>
    );
};

export default Dashboard;

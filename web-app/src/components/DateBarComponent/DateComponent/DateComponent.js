import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './DateComponent.module.scss';

const DateComponent = ({ currentDay, id, selectedDateId, selectDate }) => {
    const checkForSelected = () => {
        if (selectedDateId === id) {
            return true;
        }
        return false;
    };

    return (
        <div
            className={`${styles['date-wrapper']} ${
                checkForSelected() && styles['selected']
            }`}
            onClick={() => selectDate(id, currentDay.currentDate)}
        >
            <p className={styles['date']}>{currentDay.date}</p>
            <p className={styles['day']}>{currentDay.day}</p>
        </div>
    );
};

DateComponent.propTypes = {
    currentDay: PropTypes.object,
    id: PropTypes.string,
    selectedDateId: PropTypes.string,
    selectDate: PropTypes.func,
};

export default DateComponent;

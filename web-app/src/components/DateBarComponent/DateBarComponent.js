import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import { getDaysOfTheWeek } from './helper';
import { initialDateId, dateFormat } from './constants';
import DateComponent from './DateComponent/DateComponent';
import styles from './DateBarComponent.module.scss';

const DateBarComponent = () => {
    const moment = require('moment');
    const startDate = moment('2022-04-20');
    const [dates, setDates] = useState([]);
    const [currentWeek, setCurrentWeek] = useState(0);
    const [selectedDateId, setSelectedDateId] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [dayProgress, setDayProgress] = useState();

    useEffect(() => {
        setCurrentWeek(0);
        setSelectedDateId(initialDateId);
        setSelectedDate(moment().format(dateFormat));
        setDates(getDaysOfTheWeek(moment()));
        const difference = moment().diff(startDate, 'days');
        setDayProgress(difference);
    }, []);

    const selectPreviousWeek = () => {
        const requiredWeek = currentWeek - 1;
        setCurrentWeek(requiredWeek);
        setSelectedDateId(initialDateId);
        setSelectedDate(getStartingDay(requiredWeek).format(dateFormat));
        setDates(getDaysOfTheWeek(getStartingDay(requiredWeek)));
    };

    const selectNextWeek = () => {
        const requiredWeek = currentWeek + 1;
        setCurrentWeek(requiredWeek);
        setSelectedDateId(initialDateId);
        setSelectedDate(getStartingDay(requiredWeek).format(dateFormat));
        setDates(getDaysOfTheWeek(getStartingDay(requiredWeek)));
    };

    const getStartingDay = (currentWeek) => {
        return currentWeek > 0
            ? moment().add(currentWeek * 7, 'days')
            : moment().subtract(currentWeek * -1 * 7, 'days');
    };

    const selectDate = (id, currentDate) => {
        setSelectedDateId(id);
        setSelectedDate(moment(currentDate).format(dateFormat));
    };

    const resetDate = () => {
        setCurrentWeek(currentWeek);
        setDates(getDaysOfTheWeek(getStartingDay(currentWeek)));
        setSelectedDateId(initialDateId);
        setSelectedDate(moment().format(dateFormat));
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['current-date-wrapper']}>
                <div className={styles['reload']} onClick={resetDate}>
                    <RotateLeftRoundedIcon></RotateLeftRoundedIcon>
                </div>
                <div className={styles['current-date']}>{selectedDate}</div>
            </div>
            <div className={styles['date-main-wrapper']}>
                <div
                    className={styles['left-arrow-wrapper']}
                    onClick={selectPreviousWeek}
                >
                    <div className={styles['arrow']}>
                        <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
                    </div>
                </div>
                {dates.map((currentDay, i) => (
                    <DateComponent
                        currentDay={currentDay}
                        id={`dateComponent${i}`}
                        key={`dateComponent${i}`}
                        selectedDateId={selectedDateId}
                        selectDate={selectDate}
                    />
                ))}
                <div
                    className={styles['right-arrow-wrapper']}
                    onClick={selectNextWeek}
                >
                    <div className={styles['arrow']}>
                        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                    </div>
                </div>
            </div>
            <div className={styles['day-count-main']}>
                <FlashOnRoundedIcon></FlashOnRoundedIcon>
                <div>Day {dayProgress}</div>
            </div>
        </div>
    );
};

export default DateBarComponent;

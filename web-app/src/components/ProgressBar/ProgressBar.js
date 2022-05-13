import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import styles from './ProgressBar.module.scss';

const Container = Styled.div`
    progress[value] {
        width: ${(props) => props.width};
        -webkit-appearence: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color: #eee;
        box-shadow: 0 0 2px #00000029;
    }

    progress[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: ${(props) => props.color};
        box-shadow: 0 0 2px #00000029;
    }
`;

const ProgressBar = ({ color, value, max, speed, title, width }) => {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        const progress = setInterval(() => {
            setProgressValue((oldValue) => {
                const newValue = oldValue + 1;

                if (newValue === value) {
                    clearInterval(progress);
                }
                return newValue;
            });
        }, speed);
    }, [value]);

    return (
        <div className={styles['main-container']}>
            <div className={styles['content']}>
                <h3>{title}</h3>
                <h3>{value}%</h3>
            </div>
            <Container color={color} width={width}>
                <div className={styles['progress-bar']}>
                    <progress value={progressValue} max={max}></progress>
                </div>
            </Container>
        </div>
    );
};

ProgressBar.prototypes = {
    color: PropTypes.string,
    max: PropTypes.number.isRequired,
    value: PropTypes.number,
    speed: PropTypes.number,
    width: PropTypes.string,
};

ProgressBar.defaultProps = {
    max: 100,
    color: '#87CEEB',
};

export default ProgressBar;

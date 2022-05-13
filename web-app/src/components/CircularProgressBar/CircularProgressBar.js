import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import styles from './CircularProgressBar.module.scss';

const Container = Styled.div`
        position: relative;
        height: ${(props) => props.width};
        width: ${(props) => props.width};
        border-radius: 50%;
        display: grid;
        place-items: center;
        box-shadow: 0 0 6px #00000029;

        &::before {
            content: '';
            position: absolute;
            height: 84%;
            width: 84%;
            background-color: ${(props) => props.backgroundColor};
            border-radius: 50%;
            box-shadow: inset 0 0 6px #00000029;
        }

        svg {
            height: calc(${(props) => props.width} / 2);
            width: calc(${(props) => props.width} / 2);
        }
`;

const CircularProgressBar = ({
    backgroundColor,
    currentProgress,
    displayPercentage,
    innerSvg,
    progressSpeed,
    svgColour,
    width,
}) => {
    const [progressValue, setProgressValue] = useState(0);
    const [progressColor, setProgressColor] = useState('#fff');

    useEffect(() => {
        let value = 0;
        if (currentProgress) {
            const progress = setInterval(() => {
                if (value === currentProgress) {
                    setProgressValue(value);
                    clearInterval(progress);
                }
                value++;
                setProgressColor(`conic-gradient(${svgColour} ${value * 3.6}deg,
                #fff ${value * 3.6}deg)`);
            }, progressSpeed);
        }
    }, [currentProgress]);

    return (
        <Container
            backgroundColor={backgroundColor}
            width={width}
            style={{ background: `${progressColor}` }}
        >
            <div
                className={styles['inner-circular-container']}
                style={{ color: `${svgColour}` }}
            >
                {innerSvg}
                {displayPercentage && <span>{progressValue}%</span>}
            </div>
        </Container>
    );
};

CircularProgressBar.proptypes = {
    backgroundColor: PropTypes.string,
    innerSvg: PropTypes.object,
    svgColour: PropTypes.string,
    currentProgress: PropTypes.number,
    progressSpeed: PropTypes.number,
    width: PropTypes.string,
};

CircularProgressBar.defaultProps = {
    backgroundColor: '#fff',
    currentProgress: 0,
    displayPercentage: false,
    progressSpeed: 5,
    svgColour: '#87CEEB',
    width: '110px',
};

export default CircularProgressBar;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgressBar from '../../../../../components/CircularProgressBar/CircularProgressBar';
import LocalDrinkSharpIcon from '@mui/icons-material/LocalDrinkSharp';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './WaterGlassCard.module.scss';

const WaterGlassCard = ({ maximumLimit, progress }) => {
    const [percentage, setPercentage] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        if (maximumLimit) {
            setCurrentProgress(progress);
            calculatePercentage(progress);
        }
    }, []);

    const calculatePercentage = (progress) => {
        const currentPercentage = (progress / maximumLimit) * 100;
        setPercentage(currentPercentage);
    };

    const addGlass = () => {
        setCurrentProgress((oldValue) => {
            const newValue = oldValue + 1;
            calculatePercentage(newValue);
            return newValue;
        });
    };

    const reduceGlass = () => {
        if (currentProgress >= 1) {
            setCurrentProgress((oldValue) => {
                const newValue = oldValue - 1;
                calculatePercentage(newValue);
                return newValue;
            });
        } else {
            setCurrentProgress(0);
            setPercentage(0);
        }
    };

    return (
        <div className={styles['main-container']}>
            <div className={styles['progress-action']}>
                <div className={styles['minus-button']} onClick={reduceGlass}>
                    <RemoveCircleIcon></RemoveCircleIcon>
                </div>
                <CircularProgressBar
                    backgroundColor={'#8aa250'}
                    currentProgress={percentage}
                    innerSvg={<LocalDrinkSharpIcon />}
                    progressSpeed={7}
                    svgColour={'#00DFD1'}
                    width={'95px'}
                ></CircularProgressBar>
                <div className={styles['add-button']} onClick={addGlass}>
                    <AddCircleIcon></AddCircleIcon>
                </div>
            </div>
            <div className={styles['progress-content']}>
                {currentProgress} of {maximumLimit} Glasses
            </div>
        </div>
    );
};

WaterGlassCard.proptypes = {
    maximumLimit: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
};

WaterGlassCard.defaultProps = {
    progress: 0,
};

export default WaterGlassCard;

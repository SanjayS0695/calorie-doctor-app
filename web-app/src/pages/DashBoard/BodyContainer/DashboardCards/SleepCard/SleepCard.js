import React from 'react';
import CircularProgressBar from '../../../../../components/CircularProgressBar/CircularProgressBar';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import styles from './SleepCard.module.scss';

const SleepCard = () => {
    return (
        <div className={styles['main-container']}>
            <CircularProgressBar
                backgroundColor={'#8aa250'}
                currentProgress={0}
                innerSvg={<LocalHotelIcon />}
                progressSpeed={7}
                svgColour={'#97F5FD'}
                width={'95px'}
            ></CircularProgressBar>
            <div className={styles['progress-content']}>Set Sleep Goal</div>
        </div>
    );
};

export default SleepCard;

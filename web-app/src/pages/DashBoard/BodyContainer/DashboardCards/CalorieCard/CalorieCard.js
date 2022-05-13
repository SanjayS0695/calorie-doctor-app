import React from 'react';
import DirectionsRunSharpIcon from '@mui/icons-material/DirectionsRunSharp';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CircularProgressBar from '../../../../../components/CircularProgressBar/CircularProgressBar';
import styles from './CalorieCard.module.scss';

const CalorieCard = () => {
    return (
        <div className={styles['main-container']}>
            <CircularProgressBar
                backgroundColor={'#8aa250'}
                currentProgress={40}
                innerSvg={<DirectionsRunSharpIcon />}
                progressSpeed={7}
                svgColour={'#EDED83'}
                width={'95px'}
            ></CircularProgressBar>
            <div className={styles['progress-container']}>
                300 of 394 Calories Burnt
            </div>
            <div className={styles['actions-container']}>
                <EqualizerRoundedIcon></EqualizerRoundedIcon>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
        </div>
    );
};

export default CalorieCard;

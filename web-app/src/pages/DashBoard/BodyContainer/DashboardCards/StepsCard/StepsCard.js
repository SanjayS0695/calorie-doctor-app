import React from 'react';
import CircularProgressBar from '../../../../../components/CircularProgressBar/CircularProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import styles from './StepsCard.module.scss';

const StepsCard = () => {
    return (
        <div className={styles['main-container']}>
            <CircularProgressBar
                backgroundColor={'#8aa250'}
                currentProgress={0}
                innerSvg={<FontAwesomeIcon icon={faShoePrints} />}
                progressSpeed={7}
                svgColour={'#97F5FD'}
                width={'95px'}
            ></CircularProgressBar>
            <div className={styles['progress-content']}>Walk 10,000 Steps</div>
        </div>
    );
};

export default StepsCard;

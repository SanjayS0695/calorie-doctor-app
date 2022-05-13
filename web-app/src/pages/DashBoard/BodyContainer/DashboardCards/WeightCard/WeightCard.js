import React from 'react';
import CircularProgressBar from '../../../../../components/CircularProgressBar/CircularProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import styles from './WeightCard.module.scss';

const WeightCard = () => {
    return (
        <div className={styles['main-container']}>
            <CircularProgressBar
                backgroundColor={'#8aa250'}
                currentProgress={0}
                innerSvg={<FontAwesomeIcon icon={faWeightScale} />}
                progressSpeed={7}
                svgColour={'#F29ACD'}
                width={'95px'}
            ></CircularProgressBar>
            <div className={styles['progress-content']}>0.0 of 2.4Kgs lost</div>
        </div>
    );
};

export default WeightCard;

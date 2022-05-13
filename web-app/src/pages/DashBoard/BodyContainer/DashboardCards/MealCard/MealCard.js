import React from 'react';
import PropTypes from 'prop-types';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ELEMENT_ID } from '../../../../../utils/componentIds';
import styles from './MealCard.module.scss';

const MealCard = ({ addMeal, closeMealCard }) => {
    return (
        <div className={styles['meal-card']}>
            <div className={styles['header']}>
                <h4>Which meal would you like to track?</h4>
                <div
                    className={styles['close-meal-card']}
                    onClick={closeMealCard}
                >
                    <CloseTwoToneIcon></CloseTwoToneIcon>
                </div>
            </div>
            <div
                className={styles['meal-container']}
                id={ELEMENT_ID.MEAL_CARD_BEARKFAST}
            >
                <div
                    className={styles['meal-title']}
                    id={ELEMENT_ID.MEAL_CARD_BEARKFAST_TITLE}
                >
                    Breakfast
                </div>
                <div
                    className={styles['meal-calories']}
                    id={ELEMENT_ID.MEAL_CARD_BEARKFAST_CALORIES}
                >
                    0 of 520 Cal
                </div>
                <AddRoundedIcon
                    onClick={addMeal}
                    id={ELEMENT_ID.MEAL_CARD_BEARKFAST_ADD}
                ></AddRoundedIcon>
            </div>
            <div className={styles['meal-container']}>
                <div className={styles['meal-title']}>Morning Snack</div>
                <div className={styles['meal-calories']}>0 of 520 Cal</div>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
            <div className={styles['meal-container']}>
                <div className={styles['meal-title']}>Lunch</div>
                <div className={styles['meal-calories']}>0 of 520 Cal</div>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
            <div className={styles['meal-container']}>
                <div className={styles['meal-title']}>Evening Snack</div>
                <div className={styles['meal-calories']}>0 of 520 Cal</div>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
            <div className={styles['meal-container']}>
                <div className={styles['meal-title']}>Dinner</div>
                <div className={styles['meal-calories']}>0 of 520 Cal</div>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
        </div>
    );
};

MealCard.prototypes = {
    addMeal: PropTypes.func,
    closeMealCard: PropTypes.func,
};

export default MealCard;

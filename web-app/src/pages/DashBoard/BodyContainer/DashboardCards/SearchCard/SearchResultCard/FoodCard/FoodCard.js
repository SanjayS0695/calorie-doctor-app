import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import image from '../../../../../../../assets/images/chickenCurry.png';
import styles from './FoodCard.module.scss';

const FoodCard = ({ addFoodItem, discardFoodItem }) => {
    const [dropDownActive, setDropDownActive] = useState(false);
    const [quantity, setQuantity] = useState('Grams');
    const [portion, setPortion] = useState(1);

    useEffect(() => {
        setQuantity('Grams');
        setPortion(1);
    }, []);

    const handleDropDownClick = () => {
        setDropDownActive(!dropDownActive);
    };

    const increasePortion = () => {
        setPortion((oldValue) => {
            if (oldValue < 5) {
                return oldValue + 0.5;
            } else if (oldValue >= 5 && oldValue < 50) {
                return oldValue + 5;
            } else if (oldValue >= 50 && oldValue < 100) {
                return oldValue + 10;
            } else if (oldValue <= 2900) {
                return oldValue + 100;
            }
        });
    };

    const decreasePortion = () => {
        setPortion((oldValue) => {
            if (oldValue > 0 && oldValue <= 5) {
                return oldValue - 0.5;
            } else if (oldValue > 5 && oldValue <= 50) {
                return oldValue - 5;
            } else if (oldValue > 50 && oldValue <= 100) {
                return oldValue - 10;
            } else if (oldValue <= 3000) {
                return oldValue - 100;
            }
        });
    };

    return (
        <div className={styles['back-card-content']}>
            <div className={styles['back-card-header']}>
                <div className={styles['header-content']}>
                    <div className={styles['section-one']}>
                        <h2>Chicken Curry</h2>
                        <h3>360 Cals</h3>
                        <div className={styles['food-nutrition']}>
                            <div className={styles['row-one']}>
                                <div className={styles['nutrient']}>
                                    <h4>Protien</h4>
                                    <span>11.2g</span>
                                </div>
                                <div className={styles['nutrient']}>
                                    <h4>Carb</h4>
                                    <span>5.9g</span>
                                </div>
                            </div>
                            <div className={styles['row-two']}>
                                <div className={styles['nutrient']}>
                                    <h4>Fat</h4>
                                    <span>10.4g</span>
                                </div>
                                <div className={styles['nutrient']}>
                                    <h4>Fibre</h4>
                                    <span>8g</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['section-two']}>
                        <img
                            src={image}
                            alt="Not Available"
                            className={styles['food-image']}
                        ></img>
                    </div>
                </div>
            </div>
            <div className={styles['back-card-body']}>
                <Button variant="contained" onClick={discardFoodItem}>
                    Discard
                </Button>
                <div className={styles['quantity-container']}>
                    <div className={styles['stepper-container']}>
                        <button
                            id="decrement"
                            className={styles['decrement']}
                            onClick={decreasePortion}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min="0.5"
                            max="2500"
                            step="5"
                            value={portion}
                            id="quanityInput"
                        ></input>
                        <button
                            id="increment"
                            className={styles['increment']}
                            onClick={increasePortion}
                        >
                            +
                        </button>
                    </div>
                    <div className={styles['dropdown-container']}>
                        <div className={styles['select-box']}>
                            <div
                                className={`${styles['options-container']} ${
                                    dropDownActive && styles['active']
                                }`}
                            >
                                <div className={styles['options']}>
                                    <input
                                        type="radio"
                                        className={styles['radio']}
                                        id="id1"
                                        name="quantity"
                                    ></input>
                                    <label for="id1"> Id1 </label>
                                </div>
                                <div className={styles['options']}>
                                    <input
                                        type="radio"
                                        className={styles['radio']}
                                        id="id2"
                                        name="quantity"
                                    ></input>
                                    <label for="id2"> Id2 </label>
                                </div>
                                <div className={styles['options']}>
                                    <input
                                        type="radio"
                                        className={styles['radio']}
                                        id="id3"
                                        name="quantity"
                                    ></input>
                                    <label for="id3"> Id3 </label>
                                </div>
                                <div className={styles['options']}>
                                    <input
                                        type="radio"
                                        className={styles['radio']}
                                        id="id4"
                                        name="quantity"
                                    ></input>
                                    <label for="id4"> Id4 </label>
                                </div>
                            </div>
                            <div
                                className={styles['selected']}
                                onClick={handleDropDownClick}
                            >
                                <span>{quantity}</span>
                                <div
                                    className={`${styles['down-arrow']} ${
                                        dropDownActive && styles['active']
                                    }`}
                                >
                                    <KeyboardArrowDownSharpIcon></KeyboardArrowDownSharpIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button variant="contained" onClick={addFoodItem}>
                    Add
                </Button>
            </div>
        </div>
    );
};

FoodCard.prototypes = {
    addFoodItem: PropTypes.func,
    discardFoodItem: PropTypes.func,
};

export default FoodCard;

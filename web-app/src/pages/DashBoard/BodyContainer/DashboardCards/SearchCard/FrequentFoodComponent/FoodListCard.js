import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem/FoodItem';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import FoodCard from '../SearchResultCard/FoodCard/FoodCard';
import styles from './FoodListCard.module.scss';

const FoodListCard = ({ handleFooter, savedMealsStatus, showFrequentFood }) => {
    const [flipped, setFlipped] = useState(false);

    const handleEditClick = () => {
        setFlipped(true);
        handleFooter(false);
    };

    const handleCancelUpdate = () => {
        setFlipped(false);
        handleFooter(true);
    };

    return (
        <div className={styles['wrapper']}>
            <div
                className={`${styles['sub-wrapper']}  ${
                    flipped && styles['flipped']
                }`}
            >
                <div
                    className={`${styles['card-face']} ${styles['front-card']}`}
                >
                    <div className={styles['header']}>
                        {!savedMealsStatus ? (
                            showFrequentFood ? (
                                'Frequently tracked foods:'
                            ) : (
                                <>
                                    <span>Selected Food Items: </span>
                                    <span className={styles['save-icon']}>
                                        <SaveSharpIcon
                                            sx={{
                                                color: '#55652f',
                                                fontSize: '22px',
                                            }}
                                        ></SaveSharpIcon>
                                    </span>
                                </>
                            )
                        ) : (
                            <span>Saved Meals: </span>
                        )}
                    </div>
                    <div className={styles['body']}>
                        {!savedMealsStatus ? (
                            showFrequentFood ? (
                                <FoodItem></FoodItem>
                            ) : (
                                <>
                                    <FoodItem
                                        handleAddClick={() => {}}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={() => {}}
                                        showAddBtn={false}
                                        showEditBtn
                                        showDeleteBtn
                                    ></FoodItem>
                                </>
                            )
                        ) : (
                            <FoodItem></FoodItem>
                        )}
                    </div>
                </div>
                <div
                    className={`${styles['card-face']} ${styles['back-card']}`}
                >
                    <FoodCard
                        addFoodItem={handleCancelUpdate}
                        discardFoodItem={handleCancelUpdate}
                    ></FoodCard>
                </div>
            </div>
        </div>
    );
};

FoodListCard.prototypes = {
    showFrequentFood: PropTypes.bool,
};

FoodListCard.defaultProps = {
    showFrequentFood: true,
};

export default FoodListCard;

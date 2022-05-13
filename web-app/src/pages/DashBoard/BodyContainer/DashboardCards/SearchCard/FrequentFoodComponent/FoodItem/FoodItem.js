import React from 'react';
import PropTypes from 'prop-types';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
import styles from './FoodItem.module.scss';

const FoodItem = ({
    handleAddClick,
    handleEditClick,
    handleDeleteClick,
    showAddBtn,
    showEditBtn,
    showDeleteBtn,
}) => {
    return (
        <div className={styles['frequent-food-item']}>
            <div className={styles['food-header']}>
                <span className={styles['title']}>Tea with Milk and Sugar</span>
                <span className={styles['sub-title']}>1.0 teacup</span>
            </div>
            <div className={styles['food-calorie']}>
                <span>73 Cals</span>
            </div>
            {showAddBtn && (
                <div className={styles['btn-wrapper']} onClick={handleAddClick}>
                    <AddRoundedIcon
                        sx={{ color: '#f17f53', fontSize: '30px' }}
                    ></AddRoundedIcon>
                </div>
            )}
            {showEditBtn && (
                <div
                    className={styles['btn-wrapper']}
                    onClick={handleEditClick}
                >
                    <ModeEditOutlineSharpIcon
                        sx={{ color: '#f17f53', fontSize: '22.5px' }}
                    ></ModeEditOutlineSharpIcon>
                </div>
            )}
            {showDeleteBtn && (
                <div
                    className={styles['btn-wrapper']}
                    onClick={handleDeleteClick}
                >
                    <DeleteOutlineIcon
                        sx={{ color: '#F05542', fontSize: '20px' }}
                    ></DeleteOutlineIcon>
                </div>
            )}
        </div>
    );
};

FoodItem.prototypes = {
    showAddBtn: PropTypes.bool,
    showEditBtn: PropTypes.bool,
    showDeleteBtn: PropTypes.bool,
};

FoodItem.defaultProps = {
    showAddBtn: true,
    showEditBtn: false,
    showDeleteBtn: false,
};

export default FoodItem;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem/SearchItem';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import FoodCard from './FoodCard/FoodCard';
import styles from './SearchResultCard.module.scss';

const SearchResultCard = ({ closeSearchResults, handleFooter, searchData }) => {
    const [flipped, setFlipped] = useState(false);

    const selectFood = () => {
        setFlipped(true);
        handleFooter(false);
    };

    const discardFoodItem = () => {
        setFlipped(false);
        handleFooter(true);
    };

    const addFoodItem = () => {
        setFlipped(false);
        handleFooter(true);
    };

    return (
        <div className={styles['main-wrapper']}>
            <div
                className={`${styles['sub-wrapper']}  ${
                    flipped && styles['flipped']
                }`}
            >
                <div
                    className={`${styles['card-face']} ${styles['front-card']}`}
                >
                    <div className={styles['search-result-header']}>
                        <div className={styles['title']}> Search Results:</div>
                    </div>
                    <div className={styles['search-result-body']}>
                        {searchData?.map((item, i) => (
                            <SearchItem
                                id={`searchItem${i}`}
                                key={`searchItem${i}`}
                                searchData={item}
                                selectFood={selectFood}
                            ></SearchItem>
                        ))}
                    </div>
                    <div
                        className={styles['close-btn']}
                        onClick={closeSearchResults}
                    >
                        <CloseTwoToneIcon></CloseTwoToneIcon>
                    </div>
                </div>
                <div
                    className={`${styles['card-face']} ${styles['back-card']}`}
                >
                    <FoodCard
                        addFoodItem={addFoodItem}
                        discardFoodItem={discardFoodItem}
                    ></FoodCard>
                </div>
            </div>
        </div>
    );
};

SearchResultCard.defaultProps = {
    searchData: [],
};

SearchResultCard.prototypes = {
    closeSearchResults: PropTypes.func,
    handleFooter: PropTypes.func,
    searchData: PropTypes.object,
};

export default SearchResultCard;

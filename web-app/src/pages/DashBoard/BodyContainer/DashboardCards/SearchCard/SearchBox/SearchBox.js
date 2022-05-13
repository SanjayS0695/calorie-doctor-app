import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBox.module.scss';

const SearchBox = ({ handleSearch, searchBoxStatus }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!searchBoxStatus) {
            setSearchActive(false);
        }
    }, [searchBoxStatus]);

    const onSearchButtonClick = () => {
        if (searchActive && searchTerm) {
            handleSearch(searchTerm);
        } else {
            setSearchActive(true);
        }
    };

    const onCloseButtonClick = () => {
        setSearchActive(false);
    };

    const handleSearchTerm = (event) => {
        setSearchTerm(event?.target?.value);
    };

    return (
        <div
            className={`${styles['main-container']} ${
                searchActive && styles['active']
            }`}
        >
            <div
                className={`${styles['search-title']} ${
                    searchActive && styles['active']
                }`}
            >
                <span>Search</span>
            </div>
            <input
                style={{
                    opactity: searchActive ? 1 : 0,
                    width: searchActive ? '100%' : '10%',
                    height: searchActive ? '100%' : '90%',
                    left: searchActive ? '0' : '40%',
                }}
                type="text"
                placeholder="Type to search.."
                onKeyUpCapture={handleSearchTerm}
            ></input>
            <div
                className={`${styles['search-btn']}  ${
                    searchActive && styles['active']
                }`}
                onClick={onSearchButtonClick}
            >
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
            <div
                className={`${styles['cancel-btn']} ${
                    searchActive && styles['active']
                }`}
                onClick={onCloseButtonClick}
            >
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
        </div>
    );
};

SearchBox.propTypes = {
    handleSearch: PropTypes.func,
    searchBoxStatus: PropTypes.bool,
};

SearchBox.defaultPropTypes = {
    searchBoxStatus: false,
};

export default SearchBox;

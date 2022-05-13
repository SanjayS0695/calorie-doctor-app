import React, { useState } from 'react';
import NutritionCard from './DashboardCards/NutritionCard/NutritionCard';
import CalorieCard from './DashboardCards/CalorieCard/CalorieCard';
import WaterGlassCard from './DashboardCards/WaterGlassCard/WaterGlassCard';
import WeightCard from './DashboardCards/WeightCard/WeightCard';
import SleepCard from './DashboardCards/SleepCard/SleepCard';
import StepsCard from './DashboardCards/StepsCard/StepsCard';
import SearchCard from './DashboardCards/SearchCard/SearchCard';
import MealCard from './DashboardCards/MealCard/MealCard';
import styles from './BodyContainer.module.scss';

const BodyContainer = () => {
    const [displayMealCard, setDisplayMealCard] = useState(false);
    const [displaySearchCard, setDisplaySearchCard] = useState(false);
    const [displayOverlay, setDisplayOverlay] = useState(false);

    const addToMeal = () => {
        setDisplaySearchCard(false);
    };

    const showMealCard = () => {
        setDisplayMealCard(true);
        setDisplayOverlay(true);
    };

    const closeMealCard = () => {
        setDisplayMealCard(false);
        setDisplayOverlay(false);
    };

    const addMeal = (event) => {
        setDisplaySearchCard(true);
    };

    const closeSearchCard = () => {
        setDisplaySearchCard(false);
    };

    return (
        <div className={styles['body-container']}>
            <div className={styles['intro']}>
                <h2>Hi Sanjay!</h2>
                <h3>Your day so far</h3>
            </div>
            <div className={styles['dashboard-card']}>
                <NutritionCard showMealCard={showMealCard}></NutritionCard>
                <div className={styles['sub-card']}>
                    <div className={styles['calorie-card']}>
                        <CalorieCard></CalorieCard>
                    </div>
                    <div className={styles['glass-step-card']}>
                        <div className={styles['glass-card']}>
                            <WaterGlassCard
                                maximumLimit={10}
                                progress={2}
                            ></WaterGlassCard>
                        </div>
                        <div className={styles['step-card']}>
                            <StepsCard></StepsCard>
                        </div>
                    </div>
                    <div className={styles['weight-sleep-card']}>
                        <div className={styles['weight-card']}>
                            <WeightCard></WeightCard>
                        </div>
                        <div className={styles['sleep-card']}>
                            <SleepCard></SleepCard>
                        </div>
                    </div>
                </div>
            </div>
            {displayMealCard && (
                <MealCard
                    addMeal={addMeal}
                    closeMealCard={closeMealCard}
                ></MealCard>
            )}
            {displaySearchCard && (
                <SearchCard
                    addToMeal={addToMeal}
                    closeSearchCard={closeSearchCard}
                ></SearchCard>
            )}
            {displayOverlay && <div className={styles['overlay']}></div>}
        </div>
    );
};

export default BodyContainer;

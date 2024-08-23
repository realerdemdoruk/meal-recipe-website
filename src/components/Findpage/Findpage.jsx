import React, { useState, useEffect } from 'react';
import mealsData from '../../data/meals.json'; // JSON dosyasını içe aktarın
import '../../dist.css/Findpage.css';
import MealList from '../MealList/MealList';
import Loading from '../../img/Loading.gif';
import { motion } from 'framer-motion';

const Findpage = () => {
    const [mealName, setMealName] = useState("");
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        try {
            // JSON verilerini filtreleme
            const results = mealsData.meals.filter(meal =>
                meal.strMeal.toLowerCase().includes(mealName.toLowerCase())
            );
            setFilteredMeals(results);
            setIsPending(false);
        } catch (err) {
            setError("Bir hata oluştu.");
            setIsPending(false);
        }
    }, [mealName]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="find__container">
            <motion.div 
                className="form"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .5, type: 'spring', stiffness: 100 }}>
                <form className="form__content" onSubmit={handleSubmit}>
                    <div className="form__box">
                        <input 
                            type="text" 
                            className="form__input" 
                            placeholder="Yemeği Bul"
                            required
                            value={mealName}
                            onChange={(e) => setMealName(e.target.value)} />
                        <label className="form__label">Yemeği Bul</label>
                        <div className="form__shadow"></div>
                    </div>
                </form>
            </motion.div>

            <div className="meal__list__container">
                {error && <div>{error}</div>}
                {isPending && 
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, type: 'spring', stiffness: 200 }}
                        className="loading__container">
                        <img src={Loading} alt="Loading" /> Yükleniyor...
                    </motion.div>
                }
                {filteredMeals && <MealList meals={filteredMeals} />}
            </div>
        </div>
    );
};

export default Findpage;

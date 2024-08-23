import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import categoriesData from '../../data/categories.json'; // JSON dosyasını import etme
import '../../dist.css/Category.css';
import Loading from '../../img/Loading.gif';

const Category = () => {
    
    const { strCategory } = useParams();
    
    // JSON verisini kullan
    const categories = categoriesData.categories;
    const category = categories.find(cat => cat.strCategory === strCategory);

    if (!category) {
        return <div>Kategori bulunamadı.</div>;
    }

    // Kategoriye ait yemeklerin listesi
    const meals = categoriesData.meals.filter(meal => meal.strCategory.toLowerCase() === strCategory.toLowerCase());


    return (
        <div className="category__details">
            {!meals.length ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200' }}
                    className="loading__container"
                >
                    <img src={Loading} alt="Loading" /> Yükleniyor...
                </motion.div>
            ) : (
                <>
                    

                    <div className="meal__list">
                        {meals.map((meal, index) => (
                            <div key={meal.idMeal}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200', delay: index * 0.3 }}
                                >
                                    <Link to={`/meal-recipe-website-reactjs/meal/${meal.idMeal}`} className="meal__item">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                        <div className="meal__lower">
                                            <h3>{meal.strMeal}</h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Category;

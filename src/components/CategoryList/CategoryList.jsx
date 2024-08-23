import React from 'react';
import categoriesData from '../../data/categories.json'; // JSON dosyasını içe aktarın
import Loading from '../../img/Loading.gif';
import '../../dist.css/CategoryList.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryList = () => {
    const categories = categoriesData.categories;

    return (
        <div className="category__page">
            {!categories ? (
                <div className="loading__container">
                    <img src={Loading} alt="Loading" /> Yükleniyor...
                </div>
            ) : (
                <div className="categories__container">
                    <h2>Kategori</h2>
                    <div className="categories">
                        {categories.map((category, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200', delay: index * 0.3 }}
                                className="category__container"
                                key={category.idCategory}
                            >
                                <Link to={`/meal-recipe-website-reactjs/category/${category.strCategory}`} className="category">
                                    <div className="category__img">
                                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                                    </div>
                                    <h3>{category.strCategory}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryList;

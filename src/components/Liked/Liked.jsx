// src/components/Liked/Liked.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLikedMeals } from '../../context/LikedMealsContext';
import { motion } from 'framer-motion'; // Framer Motion'u ekliyoruz
import './Liked.css'; 

const Liked = () => {
  const { likedMeals, removeMealFromLiked } = useLikedMeals();

  if (likedMeals.length === 0) {
    return (
      <motion.div className="liked-meals"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >Henüz beğenilen yemek yok.</motion.h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="liked-meals"
      initial={{ opacity: 0, y: 20 }} // Başlangıç animasyonu
      animate={{ opacity: 1, y: 0 }} // Animasyonun bitişi
      transition={{ duration: 0.5 }} // Animasyon süresi
    >
      <h2>Beğenilen Yemekler</h2>
      <motion.div 
        className="meal__list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {likedMeals.map((meal) => (
          <motion.div 
            key={meal.idMeal} 
            className="meal__item__container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/meal/${meal.idMeal}`} className="meal__item">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="meal__lower">
                <h3>{meal.strMeal}</h3>
              </div>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeMealFromLiked(meal.idMeal)}
              className="remove__button"
            >
              Kaldır
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Liked;

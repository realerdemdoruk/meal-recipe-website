// src/components/Liked/Liked.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLikedMeals } from '../../context/LikedMealsContext';
import './Liked.css'; 

const Liked = () => {
  const { likedMeals, removeMealFromLiked } = useLikedMeals();

  if (likedMeals.length === 0) {
    return <div
    className='liked-meals'
    >
      <h2>Henüz beğenilen yemek yok.</h2>
    </div>;
  }

  return (
    <div className="liked-meals">
      <h2>Beğenilen Yemekler</h2>
      <div className="meal__list">
        {likedMeals.map((meal) => (
          <div key={meal.idMeal} className="meal__item__container">
            <Link
              to={`/meal/${meal.idMeal}`}
              className="meal__item"
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="meal__lower">
                <h3>{meal.strMeal}</h3>
              </div>
            </Link>
            <button 
              onClick={() => removeMealFromLiked(meal.idMeal)} 
              className="remove__button"
            >
              Kaldır
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liked;

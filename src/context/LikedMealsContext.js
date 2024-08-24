// src/context/LikedMealsContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Context oluştur
const LikedMealsContext = createContext();

// Custom hook
export const useLikedMeals = () => useContext(LikedMealsContext);

// Provider component
export const LikedMealsProvider = ({ children }) => {
  const [likedMeals, setLikedMeals] = useState([]);

  const addMealToLiked = (meal) => {
    setLikedMeals((prevMeals) => {
      const mealExists = prevMeals.find(m => m.idMeal === meal.idMeal);
      if (mealExists) return prevMeals; // Aynı yemek varsa tekrar ekleme
      return [...prevMeals, meal];
    });
  };

  const removeMealFromLiked = (idMeal) => {
    setLikedMeals((prevMeals) => prevMeals.filter(meal => meal.idMeal !== idMeal));
  };

  return (
    <LikedMealsContext.Provider value={{ likedMeals, addMealToLiked, removeMealFromLiked }}>
      {children}
    </LikedMealsContext.Provider>
  );
};

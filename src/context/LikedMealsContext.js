import React, { createContext, useState, useContext, useEffect } from 'react';

const LikedMealsContext = createContext();

export const LikedMealsProvider = ({ children }) => {
  const [likedMeals, setLikedMeals] = useState(() => {
    // localStorage'dan beğenilen yemekleri al
    const savedMeals = localStorage.getItem('likedMeals');
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  useEffect(() => {
    // likedMeals değiştiğinde localStorage'a kaydet
    localStorage.setItem('likedMeals', JSON.stringify(likedMeals));
  }, [likedMeals]);

  const addMealToLiked = (meal) => {
    setLikedMeals((prevMeals) => {
      if (!prevMeals.some((m) => m.idMeal === meal.idMeal)) {
        return [...prevMeals, meal];
      }
      return prevMeals;
    });
  };

  const removeMealFromLiked = (mealId) => {
    setLikedMeals((prevMeals) => prevMeals.filter((meal) => meal.idMeal !== mealId));
  };

  return (
    <LikedMealsContext.Provider value={{ likedMeals, addMealToLiked, removeMealFromLiked }}>
      {children}
    </LikedMealsContext.Provider>
  );
};

export const useLikedMeals = () => useContext(LikedMealsContext);
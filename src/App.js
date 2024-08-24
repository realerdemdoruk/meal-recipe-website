import React from 'react';
import Homepage from './components/Hompage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Findpage from './components/Findpage/Findpage';
import MealDetailsPage from './components/MealDetailsPage/MealDetailsPage';
import CategoryList from './components/CategoryList/CategoryList';
import Category from './components/Category/Category';
import Random from './components/Random/Random';
import { AnimatePresence } from 'framer-motion';
import Liked from './components/Liked/Liked';
import { LikedMealsProvider } from './context/LikedMealsContext'; // LikedMealsProvider'ı import et

function App() {
  return (
    <LikedMealsProvider> {/* Tüm uygulamayı provider ile sar */}
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <AnimatePresence exitBeforeEnter>
              <Routes>

                <Route path="/meal-recipe-website-reactjs/" element={<Homepage />} />
                <Route path="/meal-recipe-website-reactjs/find" element={<Findpage />} />
                <Route path="/meal-recipe-website-reactjs/meal/:idMeal" element={<MealDetailsPage />} />
                <Route path="/meal-recipe-website-reactjs/categories" element={<CategoryList />} />
                <Route path="/meal-recipe-website-reactjs/category/:strCategory" element={<Category />} />
                <Route path="/meal-recipe-website-reactjs/random" element={<Random />} />
                <Route path="/meal-recipe-website-reactjs/liked" element={<Liked />} />                
                <Route path="/" element={<Navigate to="/meal-recipe-website-reactjs/" />} />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </LikedMealsProvider>
  );
}

export default App;

import React from 'react';
import Homepage from './components/Hompage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Findpage from './components/Findpage/Findpage';
import MealDetailsPage from './components/MealDetailsPage/MealDetailsPage';
import CategoryList from './components/CategoryList/CategoryList';
import Category from './components/Category/Category';
import Random from './components/Random/Random';
import { AnimatePresence } from 'framer-motion';
import Liked from './components/Liked/Liked';
import { LikedMealsProvider } from './context/LikedMealsContext';
import About from './components/About/About';


import Contact from './Contact/Contact';

import VisionAndMission from './components/VisionAndMission/VisionAndMission';
import FAQPage from './components/FAQPage/FAQPage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';





function App() {
  return (
    <LikedMealsProvider> {/* Tüm uygulamayı provider ile sar */}
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/find" element={<Findpage />} />
                <Route path="/meal/:idMeal" element={<MealDetailsPage />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/category/:strCategory" element={<Category />} />
                <Route path="/random/:idMeal" element={<Random />} />
                <Route path="/liked" element={<Liked />} />        
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />                  
                <Route path="/vizyonVeMisyon" element={<VisionAndMission />} />                  
                <Route path="/sss" element={<FAQPage />} />                  
                <Route path="/gizlilikpolitikasi" element={<PrivacyPolicy />} />                  
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

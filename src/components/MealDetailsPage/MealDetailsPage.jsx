import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/meals.json'; // JSON dosyasını içe aktarın
import '../../dist.css/MealDetailsPage.css';
import Salad from '../../img/salad.gif';
import Hat from '../../img/hat.gif';
import Video from '../../img/video.gif';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { v4 as uuid } from 'uuid';

const MealDetailsPage = () => {
    const { idMeal } = useParams();

    // Meal verisini filtrele
    const meal = data.meals.find(meal => meal.idMeal === idMeal);

    if (!meal) {
        return <div>Yemek bulunamadı.</div>;
    }

    return (
        <div className="meal__details__page">
            <div className="meal__details">
                <motion.div 
                    className="left__container"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: 'spring' }}
                >
                    <img src={meal.strMealThumb} alt="Meal" />
                    <div className="meal__name">
                        <h2>{meal.strMeal}</h2>
                        <p className="meal__area"><i className='bx bx-map'></i>{meal.strArea}</p>
                        <p>Kategori: {meal.strCategory}</p>
                    </div>
                </motion.div>

                <div className="body__container">
                    <div className="ingredients__container">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                        >
                            <img src={Salad} alt="Salad" />
                            Malzemeler
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                        >
                            <ul className="ingredients">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map(i => (
                                    meal[`strIngredient${i}`] && (
                                        <li key={uuid()} className="ingredient">
                                            <img 
                                                src={`https://www.themealdb.com/images/ingredients/${meal[`strIngredient${i}`]}.png`} 
                                                alt="ingredient" 
                                            />
                                            <div className="ingredient__info">
                                                <h2>{meal[`strIngredient${i}`]}</h2>
                                                <p>{meal[`strMeasure${i}`]}</p>
                                            </div>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="instruction__container">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                        >
                            <img src={Hat} alt="Hat" />
                            Talimatlar
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                        >
                            <div className="instruction">
                                {meal.strInstructions.split(". ").map((instruction, index) => (
                                    <p key={index}><i className='bx bx-cube-alt'></i>{instruction}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {meal.strYoutube && 
                    <motion.div 
                        className="video__container"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 1, delay: 3, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                    >
                        <h2><img src={Video} alt="Video" /> Yapılışı!</h2>
                        <div className="video">
                            <ReactPlayer 
                                width='100%' 
                                className="video" 
                                url={meal.strYoutube}
                            />
                        </div>
                    </motion.div>
                }
            </div>
        </div>
    );
}

export default MealDetailsPage;

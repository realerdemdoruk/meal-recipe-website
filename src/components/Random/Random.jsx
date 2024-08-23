import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loading from '../../img/Loading.gif';
import Salad from '../../img/salad.gif';
import Hat from '../../img/hat.gif';
import Video from '../../img/video.gif';
import ReactPlayer from 'react-player';
import '../../dist.css/Random.css';
import { v4 as uuid } from 'uuid';
import mealsData from '../../data/meals.json'; // meals.json dosyasını import etme

const Random = () => {
    const [meal, setMeal] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const getRandomMeal = () => {
        // Random meal seç
        const randomIndex = Math.floor(Math.random() * mealsData.meals.length);
        return mealsData.meals[randomIndex];
    };

    const fetchRandomMeal = () => {
        try {
            setMeal(getRandomMeal());
            setIsPending(false);
        } catch (err) {
            setError("Veri çekilirken bir hata oluştu.");
            setIsPending(false);
        }
    };

    useEffect(() => {
        fetchRandomMeal();
    }, []);

    return (
        <div className="category__details">
            {isPending && 
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}
                    className="loading__container">
                    <img src={Loading} alt="Loading" /> Yükleniyor...
                </motion.div>
            }
            {error && <div>{error}</div>}
            {meal && 
                <div>
                    <div className="meal__details">
                        <motion.div className="left__container"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, type: 'spring' }}>
                            <img src={meal.strMealThumb} alt="Meal" />
                            <div className="meal__name">
                                <h2>{meal.strMeal}</h2>
                                <p className="meal__area"><i className='bx bx-map'></i>{meal.strArea}</p>
                                <p>Category: {meal.strCategory}</p>
                            </div>
                        </motion.div>

                        <div className="body__container">
                            <div className="ingredients__container">
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}>
                                    <img src={Salad} alt="salad" />
                                    Malzemeler
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: 200 }}>
                                    <ul className="ingredients">
                                        {meal.strIngredient1 && meal.strMeasure1 && 
                                            <li className="ingredient">
                                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`} alt="ingredient" />
                                                <div className="ingredient__info">
                                                    <h2>{meal.strIngredient1}</h2>
                                                    <p>{meal.strMeasure1}</p>
                                                </div>
                                            </li>
                                        }
                                        {/* Diğer ingredient ve measure alanları da aynı şekilde burada listelenebilir */}
                                    </ul>
                                </motion.div>
                            </div>

                            <div className="instruction__container">
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 1, delay: 1, ease: 'easeOut', type: 'spring', stiffness: 200 }}>
                                    <img src={Hat} alt="Hats" />
                                    Talimatlar
                                </motion.h2>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 1, delay: 1.2, ease: 'easeOut', type: 'spring', stiffness: 200 }}>
                                    <div className="instruction">
                                        {meal.strInstructions.split(". ").map(instruction => (
                                            <p key={uuid()}><i className='bx bx-cube-alt'></i>{instruction}</p>
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
                                transition={{ duration: 1, delay: 3, ease: 'easeOut', type: 'spring', stiffness: 200 }}>
                                <h2><img src={Video} alt="video"/> Yapılışı!</h2>
                                <div className="video">
                                    <ReactPlayer 
                                        width='100%' 
                                        className="video" 
                                        url={meal.strYoutube} />
                                </div>
                            </motion.div>
                        }
                    </div>

                    <button onClick={fetchRandomMeal} className="random-button">
                        Yeni Rastgele Yemek
                    </button>
                </div>
            }
        </div>
    );
}

export default Random;

import React from 'react';
import HeroImg from '../../img/HeroImg.png';
import About from '../../img/About.png';
import '../../dist.css/Homepage.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import mealsData from '../../data/meals.json'; // JSON dosyasını import et

const Homepage = () => {
    // JSON'dan verileri al
    const featuredMeals = mealsData.meals.slice(0, 3); // İlk 3 yemeği seç

    return (
        <>
            <div className="homepage__container">
                <div className="left__container ">
                    <motion.h1
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0  }}
                        transition ={{ duration: 1 ,delay: .5, type: 'spring'}}>Aradığınız Yemek Tarifi!
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0  }}
                        transition ={{ duration: 1 ,delay: .6, type: 'spring'}}>
                            Yemek Rehberi ile yemek tarifi aramak artık çok kolay! İyi bir akşam yemeğinden sonra insan herkesi, hatta kendi akrabalarını bile affedebilir.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0 }}
                        transition ={{ duration: 1 ,delay: .6, type: 'spring', ease: 'easeOut'}}>
                        <div className="left__buttons">
                            <Link to="/meal-recipe-website-reactjs/find" className="find__btn btn">Tarifi Bul</Link>
                            <Link to="/meal-recipe-website-reactjs/random" className="random__btn btn"><i className='bx bxs-dice-5 bx-tada bx-rotate-90' ></i>Şaşırt Beni!</Link>
                        </div>
                    </motion.div>
                </div>

                <div className="right__container">
                    <motion.img 
                        initial={{opacity: 0, y: 50}}
                        animate={{ scale: 1.1, opacity: 1, y: 0  }}
                        transition ={{ duration: 1 ,delay: .6, type: 'spring'}}
                        src={HeroImg} 
                        alt="HeroImage"
                    />
                </div>
            </div>
       
            
            <motion.div 
                className="featured__section"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0 }}
                exit={{opacity: 0, y: 10}}
                transition={{duration: 1, delay: 1.6, ease: 'easeOut', type: 'spring', stiffness: '200'}}>

                <h1>Öne Çıkan Yemekler</h1>
                <p>En iyi yemeklerimizin tümü tek bir leziz çırpıda!</p>

                <motion.div 
                    className="featured__container"
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0 }}
                    exit={{opacity: 0}}
                    transition={{duration: .5, delay:1, ease: 'easeOut'}}>
                    {featuredMeals.map(meal => (
                        <div className="featured__meal" key={meal.idMeal}>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, delay:1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                                
                                <Link to={`/meal-recipe-website-reactjs/meal/${meal.idMeal}`} className="meal__item">
                                    <img src={meal.strMealThumb} alt="" />
                                    <div className="meal__lowered">
                                        <h3>{meal.strMeal}</h3>
                                        <p><i className='bx bx-map-alt' ></i>{meal.strArea}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0 }}
                exit={{opacity: 0, y: 10}}
                transition={{duration: 1, delay: 2.1, ease: 'easeOut', type: 'spring', stiffness: '200'}}>
                <div className="about__section">
                    <div className="about__left">
                        <h1>Hakkımızda</h1>
                        <p>Yemek Rehberi, yemek tarifi aramanıza ve sizin için en iyi yemek tarifini bulmanıza olanak tanıyan bir yemek tarifi web sitesidir. Bir yemek tarifini ada, kategoriye veya malzemeye göre arayabilirsiniz. Ayrıca rastgele bir yemek tarifi de arayabilirsiniz. Burada sizin için en iyi yemek tariflerinden birini bulabilirsiniz.</p>
                    </div>
                    <div className="img__container">
                        <img src={About} alt="about"></img>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Homepage;

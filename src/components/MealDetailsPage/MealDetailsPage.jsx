// src/components/MealDetailsPage/MealDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/meals.json"; // JSON dosyasını içe aktarın
import "../../dist.css/MealDetailsPage.css"; // Stil dosyasını unutmayın
import Salad from "../../img/salad.gif";
import Hat from "../../img/hat.gif";
import Video from "../../img/video.gif";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { createClient } from "@supabase/supabase-js";
import { useLikedMeals } from "../../context/LikedMealsContext"; // Context'ten hook'u import et

const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const MealDetailsPage = () => {
  const [userComment, setUserComment] = useState([]);
  const [yemekId, setYemekId] = useState([]);
  const [name, setName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [eposta, setEPosta] = useState([]);
  const [comment, setComment] = useState([]);

  async function getUsersComment() {
    const { data: usercommentAPI, error } = await supabase
      .from("usercomment")
      .select("*");

    if (error) {
      console.error("Error fetching comments:", error);
      return;
    }

    setUserComment(usercommentAPI);
  }


  

  useEffect(() => {
    getUsersComment();
  }, []);


  async function createComment() {
    await supabase.from("usercomment").insert({
      idmeal: meal.idMeal,
      name:name,
      surname:lastName,
      eposta:eposta,
      comment:comment
    });

    getUsersComment()
    
  }
  const { idMeal } = useParams();
  const { addMealToLiked } = useLikedMeals(); // Context'ten addMealToLiked fonksiyonunu al

  // Meal verisini filtrele
  const meal = data.meals.find((meal) => meal.idMeal === idMeal);

  

  const handleLike = () => {
    addMealToLiked(meal);
  };

  if (!meal) {
    return <div>Yemek bulunamadı.</div>;
  }

  console.log()
  return (
    <div className="meal__details__page">
      <div className="meal__details">
        <motion.div
          className="left__container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <img src={meal.strMealThumb} alt="Meal" />
          <div className="meal__name">
            <h2>{meal.strMeal}</h2>
            <p className="meal__area">
              <i className="bx bx-map"></i>
              {meal.strArea}
            </p>
            <p>Kategori: {meal.strCategory}</p>
          </div>
        </motion.div>

        <div className="body__container">
          <div className="ingredients__container">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
            >
              <img src={Salad} alt="Salad" />
              Malzemeler
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
            >
              <ul className="ingredients">
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                  (i) =>
                    meal[`strIngredient${i}`] && (
                      <li key={i} className="ingredient">
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${
                            meal[`strIngredient${i}`]
                          }.png`}
                          alt="ingredient"
                        />
                        <div className="ingredient__info">
                          <h2>{meal[`strIngredient${i}`]}</h2>
                          <p>{meal[`strMeasure${i}`]}</p>
                        </div>
                      </li>
                    )
                )}
              </ul>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={handleLike}
                transition={{
                  duration: 1,
                  delay: 1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 200,
                }}
              >
                Beğendim
              </motion.button>
            </motion.div>
          </div>

          <div className="instruction__container">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
            >
              <img src={Hat} alt="Hat" />
              Talimatlar
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="instruction">
                {meal.strInstructions.split(". ").map((instruction, index) => (
                  <p key={index}>
                    <i className="bx bx-cube-alt"></i>
                    {instruction}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {meal.strYoutube && (
          <motion.div
            className="video__container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 1,
              delay: 3,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
            }}
          >
            <h2>
              <img src={Video} alt="Video" /> Yapılışı!
            </h2>
            <div className="video">
              <ReactPlayer
                width="100%"
                className="video"
                url={meal.strYoutube}
              />
            </div>
          </motion.div>
        )}

        <div className="comments-container">
          {userComment.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <span className="comment-name">{comment.name}</span>
                <span className="comment-surname">{comment.surname}</span>
              </div>
              <div className="comment-message">{comment.comment}</div>
            </div>
          ))}
        </div>

        <div className="userComment">
          <h2>Yorum Yap!</h2>
          <div className="video">
            <form className="user__form">
              <div className="input__group">
                <label className="user">İsim</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  required
                  className="user__input"
                />
                <span className="user__shadow"></span>
              </div>
              <div className="input__group">
                <label className="user">Soyisim</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="Soyisim"
                  required
                  className="user__input"
                />
                <span className="user__shadow"></span>
              </div>
              <div className="input__group">
                <label className="user">E-posta</label>
                <input
                  value={eposta}
                  onChange={(e) => setEPosta(e.target.value)}
                  type="email"
                  name="email"
                  required
                  className="user__input"
                />
                <span className="user__shadow"></span>
              </div>

              <div className="input__group">
                <label className="user">Mesaj</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  name="message"
                  className="user__textarea"
                  required
                />
                <span className="user__shadow"></span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="contact__button"
                onClick={(e) => {
         
                  e.preventDefault(); // Formun varsayılan davranışını engelle
                  createComment();
                }}
              >
                Gönder
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetailsPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../../dist.css/CommentForm.css"; // Stil dosyasını unutmayın
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules"; // Navigation modülünü içe aktarın
import data from "../../data/meals.json"; // JSON dosyasını içe aktarın


const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const CommentForm = () => {
  const { idMeal } = useParams();
  const [userComment, setUserComment] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [eposta, setEPosta] = useState('');
  const [comment, setComment] = useState('');
  
  // const { addMealToLiked } = useLikedMeals(); // Context'ten addMealToLiked fonksiyonunu al

  const meal = data.meals.find((meal) => meal.idMeal === idMeal);

  useEffect(() => {
    const getUsersComment = async () => {
      const { data: usercommentAPI, error } = await supabase
        .from("usercomment")
        .select("*");
  
      if (error) {
        console.error("Error fetching comments:", error);
        return;
      }
  
      setUserComment(usercommentAPI);
    };

    getUsersComment();
  }, [idMeal]);


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

  const createComment = async () => {
    const { error } = await supabase.from("usercomment").insert({
      idmeal: idMeal,
      name: name,
      surname: lastName,
      eposta: eposta,
      comment: comment,
    });

    if (error) {
      console.error("Error inserting comment:", error);
    } else {
      // Formu temizleyin
      setName('');
      setLastName('');
      setEPosta('');
      setComment('');
      // Yorumları yeniden yükleyin
      getUsersComment();
    }
  };

  // const handleLike = () => {
  //   addMealToLiked(meal);
  // };

  if (!meal) {
    return <div>Yemek bulunamadı.</div>;
  }

  return (
    <div className="meal__details__page">

<div className="meal__details">
<h1 style={{ marginTop: "50px" }}>Sizin Yorumlarınız!</h1>
      <Swiper
        className="meal__details"
        spaceBetween={20} // Yorumlar arasındaki boşluk
        slidesPerView={3} // Aynı anda 3 yorum göster
        loop={false} // Sonsuz döngüyü kapat
        pagination={{ clickable: true }} // Sayfalama noktaları
        navigation={true} // Sağ ve sol butonları aktif et
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {userComment
          .filter((comment) => comment.idmeal === idMeal)
          .map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="comment-card">
                <div className="comment-header">
                  <span className="comment-name">{comment.name}</span>
                  <span className="comment-surname">{comment.surname}</span>
                </div>  
                <div className="comment-message">{comment.comment}</div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="userComment">
        <h2>Yorum Yap!</h2>
        <div className="video">
          <form className="user__form" onSubmit={(e) => {
            e.preventDefault();
            createComment();    
          }}>
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
                name="lastName"
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

export default CommentForm;

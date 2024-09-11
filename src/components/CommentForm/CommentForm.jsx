import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../../dist.css/CommentForm.css";
import { createClient } from "@supabase/supabase-js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import data from "../../data/meals.json";

const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const CommentForm = () => {
  const { idMeal } = useParams();
  const [userComment, setUserComment] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const meal = data.meals.find((meal) => meal.idMeal === idMeal);

  useEffect(() => {
    const checkUserSession = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Kullanıcı bilgisi alınırken hata oluştu:", error);
      } else {
        setUser(user); // Kullanıcı oturum açmışsa user'ı set ediyoruz
      }

      setLoading(false);
    };

    checkUserSession();
  }, []);

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

  const createComment = async () => {
    if (!user) {
      console.error("Kullanıcı giriş yapmamış");
      return;
    }

    const { error } = await supabase.from("usercomment").insert({
      idmeal: idMeal,
      name: name,
      surname: lastName,
      comment: comment,
      user_id: user.id,
    });

    if (error) {
      console.error("Error inserting comment:", error);
    } else {
      setName("");
      setLastName("");
      setComment("");

      const { data: usercommentAPI, error: fetchError } = await supabase
        .from("usercomment")
        .select("*");

      if (fetchError) {
        console.error("Error fetching comments after insert:", fetchError);
        return;
      }

      setUserComment(usercommentAPI);
    }
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!meal) {
    return <div>Yemek bulunamadı.</div>;
  }

  return (
    <div className="meal__details__page">
      <div className="meal__details">
        <h1 style={{ marginTop: "50px", marginBottom: "20px" }}>
          Sizin Yorumlarınız!
        </h1>
        <Swiper
          className="swiper-container"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
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

        {user ? (
          <div className="userComment">
            <h2>Yorum Yap!</h2>
            <div className="video">
              <form
                className="user__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  createComment();
                }}
              >
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
        ) : (
          <div className="login-prompt">
            <p>Yorum yapabilmek için giriş yapmanız gerekiyor.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentForm;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);

    formDataToSend.append("access_key", "08b1bca0-2469-435d-b2d7-fe9bf8947055");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);

      // Form verilerini temizle
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Başarı mesajını göster
      setIsSubmitted(true);

      // Bildirimi 3 saniye sonra gizle
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      console.log("Form submission failed", res);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="contact__container"
    >
      <h2>Bizimle İletişime Geçin</h2>
      <form className="contact__form" onSubmit={onSubmit}>
        <div className="input__group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <label className="contact__label">İsim</label>
          <span className="contact__shadow"></span>
        </div>

        <div className="input__group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <label className="contact__label">E-posta</label>
          <span className="contact__shadow"></span>
        </div>

        <div className="input__group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact__textarea"
          />
          <label className="contact__label">Mesaj</label>
          <span className="contact__shadow"></span>
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

      {/* Başarı mesajını göster */}
      {isSubmitted && (
        <motion.div
          className="contact__success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mesajınız iletildi!
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;

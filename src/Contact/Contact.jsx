import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderildiğinde yapılacak işlemler (örneğin bir API isteği)
    console.log("Form Data:", formData);
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
      <form className="contact__form" onSubmit={handleSubmit}>
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
    </motion.div>
  );
};

export default Contact;

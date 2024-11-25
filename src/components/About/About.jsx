import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../img/About.png";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.1,
        delay: 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: "100",
      }}
    >
      <div className="about__section">
        <div className="about__left">
          <h1>Hakkımızda</h1>
          <p>
            Yemek Günlüğü, yemek tarifi aramanıza ve sizin için en iyi yemek
            tarifini bulmanıza olanak tanıyan bir yemek tarifi web sitesidir.
            Bir yemek tarifini ara, kategoriye veya malzemeye göre
            arayabilirsiniz. Ayrıca rastgele bir yemek tarifi de
            arayabilirsiniz. Burada sizin için en iyi yemek tariflerinden birini
            bulabilirsiniz.
          </p>
        </div>
        <div className="img__container">
          <img src={AboutImg} alt="about"></img>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

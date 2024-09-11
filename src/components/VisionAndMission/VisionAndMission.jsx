import React from "react";
import "../../dist.css/VisionAndMission.css";
import { motion } from "framer-motion";

const VisionAndMission = () => {
  return (
    <motion.div
      class="misyon-vizyon-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Misyonumuz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Gastronomi dünyasının her köşesini keşfetmeyi ve mutfakta yaratıcı
          olmayı seven herkes için ilham kaynağı olmak, yemek yapma ve paylaşma
          deneyimini zenginleştirmek için buradayız. Misyonumuz, bireylerin
          mutfakta daha iyi ve daha bilinçli tercihler yapmalarını sağlamak,
          evde yemek yapma keyfini artırmak ve sağlıklı beslenme
          alışkanlıklarını teşvik etmektir. Yemek tariflerimiz ve
          içeriklerimizle, herkesin kolayca erişebileceği, lezzetli ve besleyici
          yemekler hazırlamasını sağlamayı hedefliyoruz. Yemek yapmanın sadece
          bir ihtiyaç değil, aynı zamanda bir sanat olduğunu biliyoruz. Bu
          yüzden, her tarifin arkasında bir hikaye, her malzemenin arkasında bir
          kültür olduğunu vurguluyoruz. Amacımız, kullanıcılarımıza sadece
          tarifler sunmak değil, aynı zamanda onları mutfakta daha yaratıcı ve
          bilinçli bir yolculuğa çıkararak, yemek yapmanın keyfini artırmaktır.
          Kullanıcılarımızın mutfakta daha yaratıcı ve özgün olmalarını teşvik
          ederken, aynı zamanda onların yemek yapma sürecini kolaylaştırmak için
          en iyi araçları ve kaynakları sunmak bizim önceliğimizdir.
        </motion.p>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Vizyonumuz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Vizyonumuz, dünyanın dört bir yanından yemek kültürlerini ve
          tariflerini bir araya getirerek, mutfakta sınır tanımayan bir topluluk
          oluşturmak ve her bireyin yemek yapma yeteneğini geliştirerek, global
          bir yemek kültürü ağı kurmaktır. Gelecekte, yemek yapma becerilerini
          geliştiren, beslenme bilgilerini artıran ve mutfakta daha bilinçli
          seçimler yapan milyonlarca insanın ilham kaynağı olmayı hedefliyoruz.
          Dijital çağın getirdiği yenilikleri mutfak dünyasına entegre ederek,
          kullanıcılarımıza daha dinamik ve etkileşimli bir yemek deneyimi
          sunmayı amaçlıyoruz. Tarife dayalı bir topluluk oluşturmak ve
          kullanıcıların kendi tariflerini paylaşabilecekleri bir platform
          yaratmak, bu vizyonun temel taşlarındandır. Teknolojiyi ve yenilikçi
          çözümleri kullanarak, yemek yapma sürecini daha erişilebilir,
          eğlenceli ve öğretici hale getirmek için sürekli olarak kendimizi
          geliştiriyoruz. Yemeklerin sadece bir beslenme kaynağı değil, aynı
          zamanda kültürel bir bağ olduğunu biliyor ve bu anlayışla hareket
          ediyoruz. Her gün, mutfakta daha iyi sonuçlar almak ve yemek yapma
          deneyimini zenginleştirmek için çalışıyoruz. Gelecekte, herkesin
          mutfakta kendi yaratıcı potansiyelini keşfetmesini sağlamak ve yemek
          yapmayı keyifli bir sanat haline getirmek için durmaksızın yenilikçi
          çözümler sunmaya devam edeceğiz. Bizimle bu yolculuğa çıkan her
          bireyin mutfakta daha mutlu ve yaratıcı bir deneyim yaşamasını
          diliyoruz.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default VisionAndMission;

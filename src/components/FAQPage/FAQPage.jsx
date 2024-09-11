import React, { useState } from 'react';
import '../../dist.css/FAQPage.css';
import { motion } from 'framer-motion';



const faqData = [
  {
    question: "Yemek tariflerinizi nasıl bulabilirim?",
    answer: "Yemek tariflerine ana sayfada bulunan arama çubuğunu kullanarak ulaşabilirsiniz. Ayrıca, kategorilere göz atarak da tariflerimizi keşfedebilirsiniz."
  },
  {
    question: "Tarifleriniz ne sıklıkla güncelleniyor?",
    answer: "Tariflerimiz düzenli olarak güncellenir. Yeni tarifler ve yemek önerileri için bültenimize abone olabilir veya sosyal medya hesaplarımızı takip edebilirsiniz."
  },
  {
    question: "Tariflere nasıl yorum yapabilirim?",
    answer: "Her tarifin altında bulunan yorum bölümüne giderek yorum yapabilirsiniz. Yorum yapabilmek için üye olmanız gerekebilir."
  },
  {
    question: "Siteye nasıl üye olabilirim?",
    answer: "Üyelik işlemi için ana sayfada bulunan 'Üye Ol' butonuna tıklayarak kayıt formunu doldurabilirsiniz. Kayıt işlemi tamamlandığında, e-posta adresinize bir onay maili gönderilecektir."
  },
  {
    question: "Yardım almak için nasıl iletişime geçebilirim?",
    answer: "Yardım ve destek için iletişim formumuzu doldurabilir veya 'İletişim' sayfamızda bulunan iletişim bilgilerini kullanarak bize ulaşabilirsiniz."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div className="faq-container"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200' }}
    >
      <h1>Sıkça Sorulan Sorular</h1>
      {faqData.map((faq, index) => (
        <motion.div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 1, ease: 'easeOut', type: 'spring', stiffness: '200', delay: index * 0.3 }}
        >
          <h2 onClick={() => handleToggle(index)}>{faq.question}</h2>
          <p>{faq.answer}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQPage;

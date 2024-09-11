import React from 'react';
import { motion } from 'framer-motion';
import "../../dist.css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const headingDelays = [0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1];

  return (
    <motion.div 
      className="privacy-policy-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >  
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Gizlilik Politikası
      </motion.h1>

      <p>
        Web sitemizi kullanarak, kişisel verilerinizin nasıl toplandığı ve kullanıldığı hakkında bilgi sahibi olabilirsiniz. Gizliliğinize önem veriyoruz ve kişisel verilerinizi korumak için çeşitli önlemler alıyoruz.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[0], duration: 0.5 }}
      >
        1. Topladığımız Bilgiler
      </motion.h2>
      <p>
        Sitemizi ziyaret ettiğinizde, bazı kişisel bilgilerinizi toplayabiliriz. Bu bilgiler, adınız, e-posta adresiniz, telefon numaranız ve diğer iletişim bilgilerini içerebilir. Ayrıca, siteyi nasıl kullandığınızı takip eden teknik bilgiler de toplanabilir.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[1], duration: 0.5 }}
      >
        2. Bilgilerin Kullanımı
      </motion.h2>
      <p>
        Topladığımız bilgileri, size daha iyi hizmet sunmak ve web sitemizi geliştirmek amacıyla kullanırız. Ayrıca, size haber bültenleri, teklifler ve güncellemeler gönderebiliriz.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[2], duration: 0.5 }}
      >
        3. Bilgilerin Paylaşımı
      </motion.h2>
      <p>
        Kişisel bilgilerinizi üçüncü şahıslarla paylaşmayız, ancak yasal zorunluluklar veya hizmet sağlayıcılarımızın gereksinimleri doğrultusunda bazı bilgiler paylaşılabilir.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[3], duration: 0.5 }}
      >
        4. Çerezler
      </motion.h2>
      <p>
        Web sitemiz, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanabilir. Çerezler, tarayıcınızda saklanan küçük veri dosyalarıdır ve siteyi daha iyi bir şekilde kullanmanızı sağlar.
      </p>

      <h2>5. Güvenlik</h2>
      <p>
        Kişisel verilerinizi korumak için çeşitli güvenlik önlemleri alıyoruz. Ancak, internet üzerinden iletilen verilerin güvenliği konusunda garanti veremeyiz.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[4], duration: 0.5 }}
      >
        6. Haklarınız
      </motion.h2>
      <p>
        Kişisel verilerinize erişim, düzeltme veya silme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[5], duration: 0.5 }}
      >
        7. Değişiklikler
      </motion.h2>
      <p>
        Gizlilik politikamız zaman zaman güncellenebilir. Herhangi bir değişiklikten haberdar olmak için bu sayfayı düzenli olarak kontrol etmenizi öneririz.
      </p>

      <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: headingDelays[6], duration: 0.5 }}
      >
        8. İletişim
      </motion.h2>
      <p>
        Gizlilik politikamızla ilgili herhangi bir sorunuz varsa, bizimle iletişime geçebilirsiniz. İletişim bilgileri için [İletişim sayfamızı](#) ziyaret edebilirsiniz.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;

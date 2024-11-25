import React, { useState, useEffect } from "react";
import "../../dist.css/Register.css"; // Stil dosyasını unutmayın
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const MailSignUp = async (e) => {
    e.preventDefault();
  
    // E-posta ve şifre ile kullanıcı kaydı
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) {
      setError(error.message);
      setSuccessMessage(null);
      console.error("Kayıt hatası:", error.message);
    } else {
      console.log("Kullanıcı başarıyla kaydedildi:", data);
  
      // İsim ve soyisim bilgilerini Supabase profiline kaydetme
      const { error: updateError } = await supabase
        .from('profiles')
        .insert([
          { id: data.user.id, first_name: firstName, last_name: lastName, email: email }
        ]);
  
      if (updateError) {
        setError(updateError.message);
        console.error("Profil güncelleme hatası:", updateError.message);
      } else {
        setError(null); // Hata varsa sıfırla
        setSuccessMessage("Kayıt başarılı! Yönlendiriliyorsunuz...");
        setRegistrationSuccess(true);
      }
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      console.log("Yönlendirme işlemi başlıyor...");
      const timer = setTimeout(() => {
        navigate('/login'); // Login sayfasına yönlendir
      }, 2000); // 2 saniye bekle

      return () => clearTimeout(timer); // Temizleme
    }
  }, [registrationSuccess, navigate]);

  return (
    <div className="register-container">
    <div className="register-form">
      <h2>Kayıt Ol</h2>
      <form onSubmit={MailSignUp}>
        <div className="input-group">
          <label htmlFor="firstName">Ad</label>
          <input
            type="text"
            id="firstName"
            placeholder="Adınızı girin"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Soyad</label>
          <input
            type="text"
            id="lastName"
            placeholder="Soyadınızı girin"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-posta Adresi</label>
          <input
            type="email"
            id="email"
            placeholder="E-posta adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Kayıt Ol
        </button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  </div>
  );
};

export default Register;

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
    <div className="register-page">
      <div className="register-container">
        <h2>Kayıt Ol</h2>
        <form onSubmit={MailSignUp}>
          <input
            type="text"
            placeholder="Adınız"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Soyadınız"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Kayıt Ol</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Register;

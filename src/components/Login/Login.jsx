import React, { useState } from "react";
import "../../dist.css/Login.css"; // Stil dosyasını unutmayın
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // E-posta ve şifre ile giriş
    const { session, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
      setSuccessMessage(null);
    } else {
      console.log("Giriş başarılı:", session);
      setError(null);
      setSuccessMessage("Giriş başarılı! Yönlendiriliyorsunuz...");
      setTimeout(() => {
        navigate("/"); // Ana sayfaya yönlendir
      }, 2000); // 2 saniye bekle
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Giriş Yap</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <div className="signup-link">
            Hesabınız yok mu?
            <Link to="/register">Kayıt Olun</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(""); // Starea pentru erorile de înregistrare
  const [isSuccess, setIsSuccess] = useState(false); // Starea pentru succesul înregistrării

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Resetare erori la fiecare încercare
    if (pass !== confirmPass) {
      setError("Parolele nu se potrivesc.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        console.log('Înregistrare reușită:', data);
        window.location.href = "/login";  // Redirecționare către pagina de login
      } else {
        setError(data.error || 'Eroare la înregistrare.');
      }
    } catch (error) {
      setError('Eroare de rețea.');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="authForm">
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Parola"
          id="password"
          name="password"
        />
        <input
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          type="password"
          placeholder="Confirmă parola"
          id="confirmPassword"
          name="confirmPassword"
        />
        <button type="submit">Înregistrează-te</button>
      </form>
      {error && <p className="error">{error}</p>}
      {isSuccess && <p className="success">Înregistrare reușită!</p>}
    </div>
  );
}

export default Register;
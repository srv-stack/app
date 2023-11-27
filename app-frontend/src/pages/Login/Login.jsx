import "./Login.css";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(""); // Starea pentru erorile de autentificare
  const [isSuccess, setIsSuccess] = useState(false); // Starea pentru succesul autentificarii

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password: pass })
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        console.log('Login success:', data);
        window.location.href = "/main";  // Redirecționare către pagina principală
      } else {
        setError(data.error || 'Eroare la autentificare.'); 
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert("Eroare de rețea. Încercați din nou.");
    }
  };

  return (
    <div className="authForm">
      <form className="loginForm" onSubmit={handleSubmit}>
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
        <button className="buttonSubscribe" type="submit">
        Autentificare
        </button>
      </form>
      {isSuccess && <p className="success">Autentificare realizata cu succes!</p>}
      {error && <p>Autentificare esuata: {error}</p>}
    </div>
  );
}

export default Login;

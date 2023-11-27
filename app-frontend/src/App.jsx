import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cards from './components/Cards/Cards.jsx';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import Testoasa from './assets/testoasa.png';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={
          <div className="page">
            <div className="header">
              <p>
                Opiniile sunt mai importante ca niciodată. Platformele de sondaje
                permit organizatorilor să culeagă feedback direct de la audiența lor
                și să înțeleagă mai bine nevoile și dorințele acesteia.
              </p>
              <div>
                <img className="testoasa" src={Testoasa} />
              </div>
            </div>
            <div>
              <Cards />
            </div>
            </div>
        }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors()); 

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

connection.connect();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../app-frontend/dist', 'index.html'));
});

app.use(express.static(path.join(__dirname, '../app-frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app-frontend/dist', 'index.html'));
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).send({ error: "Email și parola sunt obligatorii" });
  }

  try {
    const users = await connection.promise().query('SELECT email FROM users WHERE email = ?', [email]);
    
    if (users[0].length > 0) {
      return res.status(409).send({ error: "Aceasta adresa de email este deja folosita!" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.promise().query('INSERT INTO users SET ?', { email: email, password: hashedPassword });
    res.status(201).send({ message: "Utilizator înregistrat cu succes!" });
  } catch (error) {
    res.status(500).send({ error: "Eroare server" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }

  try {
    const results = await connection.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    const user = results[0][0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: "Adresa de email sau parola introduse nu sunt valide." });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '8h' });
    res.status(200).send({ message: "Autentificat cu succes", token });
  } catch (error) {
    res.status(500).send({ error: "Eroare server" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server rulând pe portul ${PORT}`);
});

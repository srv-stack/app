1 - install mysql
2 - create db & user -> mysql -uroot -p < bd.sql
3 - npm install
4 - node server.js
5 - test backend - inregistrare - curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"email": "exemplu@email.com", "password": "parola123"}'
6 - test backend - login - url -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "exemplu@email.com", "password": "parola123"}'
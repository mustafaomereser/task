const express = require('express')
var cors = require('cors');
const app = express()
const port = 3000
const mysql = require('mysql2');
const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'task',
    // password: ''
});

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello 👋!');
})

app.post('/sign-up', (req, res) => {
    mysql_connection.execute('INSERT INTO users (username, email, phone, password, birthdate) VALUES (?, ?, ?, ?, ?)', [req.body.username, req.body.email, req.body.phone, req.body.password, req.body.birthdate], function (err, results, fields) {
        if (err) {
            let message = err.message;
            if (err.code == "ER_DUP_ENTRY") message = `${err.message.split(' ').pop()} is already using.`;
            return res.send({ status: 0, message: message });
        }
        res.send({ status: 1, message: 'Signup is complete, you are can signin now.' });
    });
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
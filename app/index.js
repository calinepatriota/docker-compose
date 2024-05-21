const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlTable = `create table people(id int not null auto_increment, name varchar(255), primary key(id));`
const sql = `INSERT INTO people(name) values('TESTE AE!')`
connection.query(sqlTable)
connection.query(sql)

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (error, results, fields) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Error fetching data');
            return;
        }
        
        const searchId = results[0].name;
        console.log("PEOPLE: " + searchId);
        res.send('<h1>Full Cycle Rocks! Name: ' + searchId + '</h1>');
    });
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

console.log('heree');
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
const sql = `INSERT INTO people(name) values('TESTE1')`
connection.query(sqlTable)
connection.query(sql)
connection.end()

app.get('/', (req,res)=> {
    res.send('<h1>tetsandoo huhuh</h1>')
})

console.log('heree')
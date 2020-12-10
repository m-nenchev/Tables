const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');

const port = 4000; 
const app = express();
app.use(cors());
app.use(bodyParser.json()); 

const students = [
    {id:1, firstName:'Jhon', lastName:'Smit', year:'1'},
    {id:2, firstName:'Pesho', lastName:'Dimov', year:'14'},
    {id:3, firstName:'Roza', lastName:'Toshkova', year:'51'},
    {id:4, firstName:'Gina', lastName:'Stoeva', year:'41'},
  ];
  
  app.get('/students', (req, res) =>{
       res.json(students)
    })

    app.post('/student', (req, res) => { 
           console.log(req.body);
               res.json();
             })

app.listen(port, () => console.log(
    `Backend API listening on port ${port}!`));
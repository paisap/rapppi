var bodyParser = require('body-parser');
var express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sitepoint'
});

connection.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/app/api/v1/', (req,res,next) => {
        res.send('hola mundo');
        console.log("get");
});

app.post('/app/api/v1/prueba', (req, res, next) => {
  const all_data = req.body;
  res.send(all_data);
  console.log("llego");
  console.log(all_data);
});

app.listen(3000,()=>{
        console.log('Conecting ...');
});

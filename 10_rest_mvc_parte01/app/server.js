// http GET http://localhost:3000/api/rest/libro      
// http GET http://localhost:3000/api/rest/libro/1      
// http DELETE http://localhost:3000/api/rest/libro/1      
// http PUT http://localhost:3000/api/rest/libro/1      
// echo '{ "author": "Autore01", "id": 1, "title": "Titolo01" }' |  http POST  http://localhost:3000/api/rest/libro 
// echo '{ "author": "Autore01", "id": 1, "title": "Titolo01" }' |  http PUT   http://localhost:3000/api/rest/libro /1




//------------------------
//    VARs
//-----------------------
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const defaultRoutes = require('../routes/default');   // significa ../routes/default.js
const logRoutes = require('../routes/logging');     
const apiLibroRoutes = require('../routes/apiLibro');     
const errorContoller = require('../controller/error');    
const helmet = require('helmet');
const cors = require('cors');
const corsWhitelist = ['http://localhost']
const corsOptions = { origin: corsWhitelist };

//----------------- -------
//    MIDDLEWARE
//-----------------------
app.use(helmet());
app.use(new cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logRoutes);       
app.use(defaultRoutes);               // app.use('/blabla', defaultRoutes);
app.use(apiLibroRoutes);              // app.use('/blabla', defaultRoutes);
app.use(errorContoller.get404Page);    
apiLibroRoutes



/*
app.use('*', function (req, res) {
  res
    .status(404)
    .send(`<H2>Page not found</H2>`);
});
*/

//------------------------
//    MAIN
//-----------------------
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

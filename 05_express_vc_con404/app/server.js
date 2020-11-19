
//  http GET http://localhost:3000/index.html
//  http GET http://localhost:3000/restituisci_testo
//  http GET http://localhost:3000/restituisci_valore/<N>


//------------------------
//    VARs
//-----------------------
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const defaultRoutes = require('../routes/default');   // significa ../routes/default.js
const logRoutes = require('../routes/logging');     
const errorContoller = require('../controller/error');    

//------------------------
//    MIDDLEWARE
//-----------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logRoutes);       
app.use(defaultRoutes);               // app.use('/blabla', defaultRoutes);
app.use(errorContoller.get404Page);    


/*
// Gestione della pagina di errore
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

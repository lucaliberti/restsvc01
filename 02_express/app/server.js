
//  http GET http://localhost:3000/index.html
//  http GET http://localhost:3000/restituisci_testo
//  http GET http://localhost:3000/restituisci_valore/<N>



//------------------------
//    CONFIG
//-----------------------
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)

const express = require('express');
const app = new express();


//------------------------
//    MIDDLEWARE
//-----------------------
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function (req, res, next) {
  console.log(`Serving new incoming request ${req.method} "${req.url}" from ${req.ip} `);
  next()
})


app.get('/restituisci_testo', function (req, res) {
  res
    .status(200)
    .set('Content-Type', 'text/plain')
    .send("Hello (TXT)");
});


app.get('/restituisci_valore/:N', function (req, res) {
  let reqId = req.params.N;
  res
    .status(200)
    .set('Content-Type', 'text/html')
    .send(`<H3>Hello HTML valore=${reqId}</H3>`);
});


// app.get('*', function (req, res) {
// app.use('*', function (req, res) {
app.get('/', function (req, res) {
  // creaiamo la HTTP response
  res
    .status(200)                       // imposta la stus line in HTTP response
    .set('Content-Type', 'text/html')  // imposta proprietà 'Content-Type che sarà contenuta nella HTTP requst sezione
    .send(`<H2>Hello HTML</H2>
       <p> <a href="/index.html">/index.html</a> </p>
       <p> <a href="/restituisci_testo">/restituisci_testo</a> </p>
       <p> <a href="/restituisci_valore/3">/restituisci_valore/3</a> </p>
      `);
});


app.use('*', function (req, res) {
  res
    .status(404)
    .send(`<H2>Page not found</H2>`);
});



//------------------------
//    MAIN
//-----------------------

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});

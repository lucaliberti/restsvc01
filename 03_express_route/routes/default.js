const express = require('express');
const router = express.Router();
module.exports = router;


router.get('/restituisci_testo', function (req, res) {
    res
        .status(200)
        .set('Content-Type', 'text/plain')
        .send("Hello (TXT)");
});


router.get('/restituisci_valore/:N', function (req, res) {
    let reqId = req.params.N;
    res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(`<H3>Hello HTML valore=${reqId}</H3>`);
});


// app.get('*', function (req, res) {
// app.use('*', function (req, res) {
router.get('/', function (req, res) {
    res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(`<H2>Hello HTML</H2>
         <p> <a href="/index.html">/index.html</a> </p>
         <p> <a href="/restituisci_testo">/restituisci_testo</a> </p>
         <p> <a href="/restituisci_valore/3">/restituisci_valore/3</a> </p>
        `);
});


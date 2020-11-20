const express = require('express');
const router = express.Router();
module.exports = router;
const apiLibroController=require("../controller/apiLibro");

router.get('/api/libro',                apiLibroController.getLibro);
//router.get('/restituisci_valore/:N',  defaultController.getVal);
//router.get('/',                       defaultController.getIndex);
//router.get('/index.html',             defaultController.getIndex);


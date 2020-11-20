const express = require('express');
const router = express.Router();
module.exports = router;
const apiLibroController=require("../controller/apiLibro");

router.get('/api/libro',       apiLibroController.getLibri);
router.get('/api/libro/:N',    apiLibroController.getLibro);
router.post('/api/libro',      apiLibroController.insertLibro);
router.delete('/api/libro/:N', apiLibroController.deleteLibro);
router.put('/api/libro/:N',    apiLibroController.updateLibro);

//router.get('/',            defaultController.getIndex);
//router.get('/index.html',  defaultController.getIndex);













const Libro=require("../model/libro");



exports.getLibri=(req, res, next) => {
        const libri=Libro.fetchAll();
        res.json(libri);  //Invio il risultato al Browser
}


exports.getLibro=(req, res, next) => {
        const reqId = req.params.N;
        let jsonResp=Libro.fetchById(reqId);
        if ( typeof jsonResp == 'undefined') {
                jsonResp = { "msg": `resource id ${reqId} not found` }
        }
        res.json(jsonResp);  //Invio il risultato al Browser
}

exports.insertLibro=(req, res, next) => {
        let jsonRicevuto = req.body;
        let jsonInviato={};
        console.log(jsonRicevuto);
        let libro= new Libro(jsonRicevuto) 
        let id=libro.insert();
        
        //let jsonInviato = { ...jsonRicevuto }
        // oppure equivalentemente
        //let jsonInviato=Object.assign({}, jsonRicevuto );

        jsonInviato.msg = `Json ricevuto dal client correttamente id=${id}`;
        jsonInviato.inserted_Obj = { ...jsonRicevuto }
        res.json(jsonInviato);  //Invio il risultato al Browser
}

// la delete è finta, non è stata implementata Sorry :)
exports.deleteLibro=(req, res, next) => {
        let reqId = req.params.N;
        // let retval=Libro.deleteByID(reqId);
        let jsonInviato = { "msg": `id: ${reqId} succesfully deleted ` }
        res.json(jsonInviato);  //Invio il risultato al Browser
}


// la update è finta, non è stata implementata  Sorry :)
exports.updateLibro=(req, res, next) => {
        let reqId = req.params.N;
        let jsonRicevuto = req.body;
        let jsonInviato = {}
        jsonInviato.ricevuto = { ...jsonRicevuto }
        jsonInviato.msg = `id: ${reqId} succesfully updated `
        // let retval=Libro.updateByID(reqId);
        //console.log(jsonRicevuto);
        res.json(jsonInviato);  //Invio il risultato al Browser
}
  




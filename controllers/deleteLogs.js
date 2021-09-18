const deleteLogs = async (req, res, next) => {
    var fs = require('fs');
    var respuesta=""
    try {
        //añadimos a este array todos los ficheros a borrar
        const { FILEPATHS } = process.env;
        filepath=FILEPATHS.split(',');
        
    for (let index = 0; index < filepath.length; index++) {
        if(fs.existsSync(filepath[index])){
            respuesta+=`El archivo ${filepath[index]} EXISTE y lo borramos!\n`;       
            fs.unlinkSync(filepath[index]); 
            }else{
            respuesta+=`El archivo ${filepath[index]} NO EXISTE!\n`;
            }
        }
    console.log(respuesta);
        
    } catch (error) {
        next(error);
    }
    respuesta=respuesta.replace(/\n/g, "<br />");

  

    res.send(respuesta);
};
  
module.exports = deleteLogs;
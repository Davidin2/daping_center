const deleteLogs = async (req, res, next) => {
    var fs = require('fs');
    try {
        //añadimos a este array todos los ficheros a borrar
        var filePath = [
        '/home/david/hackaboss/daping_center/borrame',
        '/home/david/hackaboss/daping_center/borrame2',
        '/home/david/hackaboss/daping_center/borrame3']; 
        
    for (let index = 0; index < filePath.length; index++) {
        if(fs.existsSync(filePath[index])){
            console.log(`El archivo ${filePath[index]} EXISTE y lo borramos!`);
            fs.unlinkSync(filePath[index]); 
            }else{
            console.log(`El archivo ${filePath[index]} NO EXISTE!`);
            }
        }
        
    } catch (error) {
        next(error);
    }
    res.send('Ficheros borrados ');
};
  
module.exports = deleteLogs;
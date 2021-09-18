const getRangos = async (req, res, next) => {
    var fs = require('fs');
    var respuesta=""
    var objeto=[]

    try {
        //añadimos a este array todos los ficheros a leer
        const { BGPPATHS, BGPNAMES} = process.env;
        filepath=BGPPATHS.split(',');
        bgpnames=BGPNAMES.split(',');



        
    for (let index = 0; index < filepath.length; index++) {
        if(fs.existsSync(filepath[index])){
            respuesta+=`El archivo ${filepath[index]} EXISTE y lo leemos!\n`;       
            var rangos = fs.readFileSync(filepath[index]).toString().split("\n");
            objeto[index]=
            {
                instancia:bgpnames[index],
                rangos:rangos
            }
            for(i in rangos) { console.log(rangos[i]); }

            }else{
            respuesta+=`El archivo ${filepath[index]} NO EXISTE!\n`;
            }
        }
    console.log(respuesta);
     

    } catch (error) {
        next(error);
    }
    respuesta=respuesta.replace(/\n/g, "<br />");

  
    res.send({
        status: 'ok',
        data: objeto,
      });
};
  
module.exports = getRangos;
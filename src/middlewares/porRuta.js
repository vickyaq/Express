// Compartir datos entre middlewares
// Alterando el objeto req
const porRuta = (req, res, next) => {

    req.usuario = 'Juan';
    

    console.log('Me ejecuto solo en rutas de producto');
    next();

}

module.exports = porRuta;

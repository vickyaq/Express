// Middleware == funcion
// Recibe req, res y next
// next debe invocarse para pasar al siguiente middleware
// puedo finalizar el flujo de peticiòn y respuesta invocando algun metodo de res
const saludar = (req, res, next) => {
    console.log('Hola desde middleware');
    next();
}

module.exports = saludar;
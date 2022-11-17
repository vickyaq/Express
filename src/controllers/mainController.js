const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./src/data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		console.log(req.usuario);
		// Parametros de url == req.params 
		// Definirlo en el router
		// /products/:id

		// req.params
		
		// Parametros de query
		// No tengo que definir nada

		// req.query
		// Filtro productos visitados 
		const visitedProducts = products.filter(product => product.category == 'visited');
		const inSaleProducts = products.filter(product => product.category == 'in-sale');

		// Devolver datos a vista
		const viewData = {
			visitedProducts,
			inSaleProducts
		}
		// Devolver vista con estos datos
		return res.render('index', viewData);

	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;

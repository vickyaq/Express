const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    
    console.log(req.usuario);

    // Obtener listado de productos
    // Devolver vista con todos los productos
    return res.render("products", { products: products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // Obtener ID del producto
    const productId = req.params.productId;
    // Buscar producto
    const productToFind = products.find((product) => product.id == productId);
    // productToFind == undefined
    if (productToFind == undefined) {
      return res.send("No existe el producto");
    }
    // Datos para la vista
    return res.render("detail", {
      product: productToFind,
      user: "Usuario actual",
      language: "es",
    });
    // Do the magic
  },

  // Create - Form to create
  create: (req, res) => {
    // Do the magic
    return res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    // POST o PUT / PATCH
    const camposDeNuevoProducto = req.body;
    // Agregar producto
    // Pushear producto al array
    camposDeNuevoProducto.id = products.length;
    camposDeNuevoProducto.image = req.file.filename;
    // TODO: Sumar 1 al id del ultimo elemento del array
    products.push(camposDeNuevoProducto);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    // Guardar JSON
    return res.send(req.file);
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Obtener ID del producto
    const productId = req.params.productId;
    // Buscar producto
    const productToFind = products.find((product) => product.id == productId);
    // productToFind == undefined
    if (productToFind == undefined) {
      return res.send("No existe el producto");
    }
    return res.render("product-edit-form", {
		productToEdit: productToFind,
    });
  },
  // Update - Method to update
  update: (req, res) => {
    const dataToUpdate = req.body;
    dataToUpdate.price = Number(dataToUpdate.price);
    dataToUpdate.discount = Number(dataToUpdate.discount);

    // Obtener el indice del producto en el array productos
    // products[0] = nuevo producto 
    const productIndex = products.findIndex(
      (product) => {
        return product.id == req.params.id
      }
    )
    if (productIndex == -1) {
      return res.send('No existe el producto')
    }
    // Actualizo array en base al indice
    // Combinar producto existente con nuevos datos a actualizar
    products[productIndex] = {
      ...products[productIndex],
      ...dataToUpdate
    }
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    return res.send(products[productIndex])
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;

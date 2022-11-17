// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

const path = require("path");

const multer = require("multer");

// En storage tengo la configuración que tendrá la instancia
const storage = multer.diskStorage({
  // Setear la lógica necesaria para el destino del archivo
  destination: function (req, file, cb) {
    // null primer parámetro, texto con el nombre de la carpeta
    cb(null, path.resolve("public/images/products"));
  },
  // Setear lógica para el nombre del archivo que se almacenará
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    // Al setear nombre del archivo hay que especificar extensión
    const fileExtension = path.extname(file.originalname);
    const newName = file.originalname.replace(fileExtension, '')
      cb(null, newName + "-" + uniqueSuffix + fileExtension);
  },
});

// En upload tengo la instancia de multer para procesar
const upload = multer({ storage });


// Importar middleware a nivel ruta
const porRuta = require('../middlewares/porRuta');


/*** GET ALL PRODUCTS ***/
// /products/
router.get("/", porRuta, productsController.index);

/*** CREATE ONE PRODUCT ***/
// /products/create
// /products
router.get("/create", porRuta, productsController.create);
// upload.single('campo') == input name="campo"
router.post("/",  upload.single("image"), productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:productId/", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:productId/", productsController.edit);
router.put("/:id", productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;

# Crud Express

Consigna: 
/
○ Se deberán mostrar los productos separados en dos secciones. Los últimos
visitados y los productos en oferta.

● /products
○ Se deberán listar todos los productos presentes en la base de datos JSON.
● /products/:id
○ Detalle de producto. Cada producto deberá contar con dos botones de
acción: BORRAR y MODIFICAR.

● /products/create
○ Mostrará el formulario de creación para un producto.
● /products/
○ Deberá recibir los datos del formulario de creación.

● /products/edit/:id
○ Botón MODIFICAR: modificará al producto correspondiente en la base de
datos JSON.
● /products/
○ Deberá recibir los datos del formulario de edición.
● /products/:id
○ Botón BORRAR: eliminará al producto de la base de datos JSON.


# Multer
- Un modulo para procesar archivos con node
- Agrega clave "file" o "files" al objeto req
    1) npm i multer
    2) configurarlo == require, y diskStorage
    3) Crear instancia con configuración anterior
    4) Paso instancia a router que quiera, con
        instancia.single o instancia.array
        instancia.single("camponame") == name del input en el form
    5) Agregar enctype="multipart/form-data" en formulario
    6) Accedo a los datos del archivo subido en req.file // req.files

# Detalle
1) Ruta que reciba un parámetro ID
2) Controlador
3) Buscar un producto pidiéndoselo al modelo en base al id recibido
4) Si no hay un producto con ese ID, devolver error
5) Si hay un producto, mostrar vista con los datos del producto
6) Vista recibe producto y muestra los datos según sea necesario

# Editar
2 Peticiones
1 = GET para mostrar formulario con campos pre completados
2 = PUT para procesar datos del formulario

1) Ruta que reciba un parámetro ID
2) Controlador
3) Buscar un producto pidiéndoselo al modelo en base al id recibido
4) Si no hay un producto con ese ID, devolver error
5) Si hay producto devolver vista de edición con los datos pre completados

## Query params & Body
- Ambos sirven para enviar datos al servidor 
- Query params se agregan en URL 
- Body viaja oculto 
- Parametros de query == cualquier petición
- Body == POST / PUT / PATCH

- Enviar parametros de query == Agregar a url ? clave = valor 
- Para agregar mas de 1 == &clave2=valor2

# Middlewares

- Elemento propio de express para modularizar la lógica del sistema
- Comparten el req, res y next
- Deben ser métodos
- Deben invocar a next o a res
- 2 tipos: Globales o por rutas

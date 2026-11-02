export let productos = [
    {
        id: 1,
        nombre: "botella plastica",
        precio: 10,
        stock: 50,
        categoria_id: 1
    },
    {
        id: 2,
        nombre: "martillo",
        precio: 150,
        stock: 20,
        categoria_id: 2
    }
];

export const mostrarProducto = (req, res) => {
    res.status(200).json(productos);
};

export const buscarProducto = (req, res) => {
    const prodID = parseInt(req.params.id);
    const producto = productos.find(prod => prod.id === prodID);

    if (!producto) {
        return res.status(404).json({
            error: "producto no encontrado"
        });
    }

    res.status(200).json(producto);
};

export const crearProducto = (req, res) => {
    const nuevoProducto = {
        ...req.body,
        id: productos.length + 1
    };

    console.log(typeof nuevoProducto);

    productos.push(nuevoProducto);

    res.status(201).json({
        mensaje: "producto creado correctamente",
        datos: nuevoProducto
    });
};

export const actualizarProducto = (req, res) => {
    const prodID = parseInt(req.params.id);
    const producto = productos.findIndex(prod => prod.id === prodID);

    if (producto === -1) {
        return res.status(404).json({
            error: "producto no encontrado"
        });
    }

    productos[producto] = {
        ...productos[producto],
        ...req.body
    };

    res.status(200).json(productos[producto]);
};

export const eliminarProducto = (req, res) => {
    const prodID = parseInt(req.params.id);
    const producto = productos.findIndex(prod => prod.id === prodID);

    if (producto === -1) {
        return res.status(404).json({
            error: "producto no encontrado"
        });
    }

    productos.splice(producto, 1);

    res.status(204).send();
};
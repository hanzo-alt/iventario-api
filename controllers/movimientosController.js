import { productos } from './productosController.js';

let movimientos = [];

// para ver los movimientos hechos
export const mostrarMovimientos = (req, res) => {
    res.status(200).json(movimientos);
};


export const buscarMovimiento = (req, res) => {
    const movID = parseInt(req.params.id);

    const movimiento = movimientos.find(
        mov => mov.id === movID
    );

    if (!movimiento) {
        return res.status(404).json({
            error: "Movimiento no encontrado"
        });
    }

    res.status(200).json(movimiento);
};

// CREAR UN MOVIMIENTO
export const crearMovimiento = (req, res) => {

    const { producto_id, tipo, cantidad } = req.body;

   
    if (!producto_id || !tipo || !cantidad) {
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    }


    if (!["entrada", "salida"].includes(tipo)) {
        return res.status(400).json({
            error: "El tipo debe ser entrada o salida"
        });
    }


    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        return res.status(400).json({
            error: "La cantidad debe ser un entero positivo"
        });
    }

    // se  busca el producto
    const producto = productos.find(
        prod => prod.id === Number(producto_id)
    );

    if (!producto) {
        return res.status(404).json({
            error: "Producto no encontrado"
        });
    }

    if (tipo === "salida" && producto.stock < cantidad) {
        return res.status(400).json({
            error: "Stock insuficiente"
        });
    }

    if (tipo === "entrada") {
        producto.stock += cantidad;
    } else {
        producto.stock -= cantidad;
    }

    const nuevoMovimiento = {
        id: movimientos.length > 0
            ? Math.max(...movimientos.map(m => m.id)) + 1
            : 1,
        producto_id: producto.id,
        tipo,
        cantidad,
        fecha: new Date()
    };

    movimientos.push(nuevoMovimiento);

    res.status(201).json({
        mensaje: "Movimiento registrado correctamente",
        movimiento: nuevoMovimiento,
        stock_actual: producto.stock
    });
};
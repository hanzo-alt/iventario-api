import express from 'express';

import {
    mostrarProducto,
    buscarProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto

} from '../controllers/productosController.js';

const router = express.Router();


router.get('/', mostrarProducto);
router.get('/:id', buscarProducto);
router.post('/', crearProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
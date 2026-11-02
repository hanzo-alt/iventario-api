import express from 'express'; 

import {
    mostrarCategoria,
    buscarCategoria,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria

} from '../controllers/categoriaController.js';

const router = express.Router();


router.get('/',mostrarCategoria);
router.get('/:id',buscarCategoria);
router.post('/',crearCategoria);
router.put('/:id',actualizarCategoria);
router.delete('/:id',eliminarCategoria);

export default router;
import express from 'express';

import {
    mostrarMovimientos,
    buscarMovimiento,
    crearMovimiento

} from '../controllers/movimientosController.js';

const router = express.Router();

router.get('/', mostrarMovimientos);
router.get('/:id', buscarMovimiento);
router.post('/', crearMovimiento);

export default router;
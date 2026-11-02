import express from 'express';

const router = express.Router();

// Tus rutas
router.get('/', (req, res) => {
    res.send('Ruta de productos');
});

export default router;
import express from "express";
import categoria from '../routes/categoria.js';
import movimientos from '../routes/movimientos.js';
import productos from '../routes/productos.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api/productos', productos);
app.use('/api/categorias', categoria);
app.use('/api/movimientos', movimientos);

app.get('/', (req, res) => {
    res.send('¡Servidor de Bodega funcionando correctamente!');
});

app.listen(PORT, ()=> {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
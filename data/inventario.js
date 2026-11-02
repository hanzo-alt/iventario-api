import express from "express";
import bodega from '../routes/bodega.js';
import categoria from '../routes/categoria.js';
import movimientos from '../routes/movimientos.js';
import productos from '../routes/productos.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('a/pi/bodega', bodega);
app.use('/api/categoria', categoria);
app.use('/api/movimientos', movimientos);
app.use('/api/productos', productos);

app.get('/', (req, res) => {
    res.send('¡Servidor de Bodega funcionando correctamente!');
});

app.listen(PORT, ()=> {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
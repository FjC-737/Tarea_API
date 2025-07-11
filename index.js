import productosRoutes from './routes/productos_routes.js';
import express from 'express';


const app = express();
app.use(express.json());

app.use('/productos', productosRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
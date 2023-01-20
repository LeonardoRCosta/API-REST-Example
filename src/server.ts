import express from 'express';
import { academyRoutes } from './routes/app.routes';

const app = express();
app.use(express.json());

const PORT = 3333;

app.use(academyRoutes);

app.listen({ port: PORT }, () => console.log('Server is running!'));

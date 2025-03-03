import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App-Congif
const app = express();
const port = 4000;

//Middleware
app.use(express.json());
app.use(cors());

// DB-Connection
connectDB();

// API-Endpoint
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRouter);


app.listen(port, () => {
    console.log(`Server Is Running On Port: ${port}`);
});

import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloundinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();  // Ensure this is called before any product-related routes
dotenv.config();


// middlewares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send("API Working get")
});

app.listen(port, () => {
    console.log("Server Started on PORT : " + port)
});

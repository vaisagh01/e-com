import express, { json } from 'express';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'
import mongoose from 'mongoose';

mongoose 
    .connect('mongodb+srv://vaisuro45:vaisagh@mern.okq28uk.mongodb.net/?retryWrites=true&w=majority&appName=mern')
    .then(()=>console.log("connected to mongodb"))
    .catch((err)=> {console.log("could not connect to db")})

const app = express();

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)

app.listen(3000, ()=>{console.log("Server running at port 3000");})
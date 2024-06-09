import express, { json } from 'express';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import productRoutes from './routes/product.route.js'
import cartRoutes from './routes/cart.route.js'
import mongoose from 'mongoose';
import {} from 'dotenv/config'


mongoose 
.connect(process.env.MONGO_DB_URI)
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


const PORT = process.env.PORT
app.listen(PORT, ()=>{console.log(`Server running at port ${PORT}`)})
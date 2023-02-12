const express=require('express');
const app=express();
const errorMiddleware=require('../server/middlewares/error')

app.use(express.json());

const bank=require('./routes/bankRoutes')

//Routes
app.use('/api/v1',bank)

//eroor middleware to handle some errors 
app.use(errorMiddleware)


module.exports=app
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorMiddleWare= require('./middleware/errorMiddleware');
const app = express();
const productRoutes = require('./routes/productRoute');
// with help of cors your frontend application can use your apis
const cors = require('cors')

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

// adding cors for perticular domain
const corsOptions = {
    origin: ['localhost:4000/'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
   
app.use(express.json());
// use this below line only when you want to send form data from postman
app.use(express.urlencoded({extended:false}));
app.use('/api/products', productRoutes);
app.use(cors(corsOptions));

app.get('/', (req, res)=>{
   // throw new Error('fake error');
    res.send('hello this in first page');
})
app.get('/blog', (req, res)=>{
    res.send('hello this in first page');
})

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL).then(()=>{
         console.log('connected to Mongodb database');
         app.listen(PORT, ()=>{
            console.log(`node is runnig on ${PORT}`);
          }) 
}).catch((error)=>{
    console.log(error);
})
app.use(errorMiddleWare);
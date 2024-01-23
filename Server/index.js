const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const ProductModel=require('./product')

const app=express();

app.use(cors());
app.use(express.json());

port=5001;
mongoose.connect('mongodb://127.0.0.1:27017/')
.then(()=>console.log("Db is connected"))
.catch((err)=>console.log(err))

app.post('/create',(req,res)=>{
    const {name,price,desc,images}=req.body;
    console.log({name,price,desc,images})
    ProductModel.create({name,price,desc,images})
    .then(result=>res.json(result))
    .catch((err)=>console.log(err))
})

app.get('/',(req,res)=>{
    ProductModel.find()
    .then(result=>res.json(result))
    .catch((err)=>console.log(err))
})

app.listen(port,()=>{
    console.log("Server is created");
})

const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:String,
    price:String,
    desc:String,
    images:{
        image1:String,
        image2:String,
        image3:String
    }
})

const Product=mongoose.model('Product',schema);

module.exports=Product;
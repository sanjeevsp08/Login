const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:['Apple','Banana','Carrot','Broccoli','Chicken','Fish','Rice','Bread','Milk','Eggs'],
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:['Fruits','Vegetables','Dairy','Meat','Grains','Other']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('FoodItem',foodSchema);

const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    orders:[
        {
            id:{
                type:Number
            },
            pname:{
                type:String
            },
            price:{
                type:Number
            },
            image:{
                type:String
            },
            date:{
                type:Date,
                default:Date.now
            },
            quantity:{
                type:String
            },
        }
    ],
    total:{
        type:Number
    },
    cardNum:{
        type:String
    },
    email:{
        type:String
    }
})
const orders=new mongoose.model("orders",orderSchema)
module.exports=orders;
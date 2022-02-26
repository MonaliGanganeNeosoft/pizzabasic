const express=require('express');
const router=express.Router();
const userModel=require('./../models/userSchema')
const jwt=require("jsonwebtoken");
const jwtSECRET="JKHJKHJKHJKHJKLM";
const pizzaModel=require("../models/pizzaSchema")
const orderModel=require("./../models/orderSchema")
function AuthenticateToken(req,res,next){
    const authHeader=req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];
    if(token == null){
        res.json({err:1,msg:"Token is not matched"});
    }
    else{
        jwt.verify(token,jwtSECRET,(err,data)=>{
            if(err){
                res.json({err:1,msg:"Token incorrect"});
            }else{
                next();
            }
        })
    }
}
router.get('/demo',(req,res)=>{
    console.log("user post")
    res.send("get  user")
})
router.post("/signup",(req,res)=>{
    console.log("sign up")
    console.log(req.body)
    let fname=req.body.fname;
    let lname=req.body.lname;
    let email=req.body.email;
    let password=req.body.password;
    let ins=new userModel({
        fname:fname,
        lname:lname,
        email:email,
        password,password,
    })
    ins.save((err)=>{
        if(err){
            // res.send("already added"+err.message)
            res.send("already added this email")
        }else{
            res.send("user is added")
        }
    })
    console.log(req.body)

})
router.post("/login",(req,res)=>{
    console.log(req.body);
    let email=req.body.email;
    let password=req.body.password;
    userModel.findOne({email:email,password:password},(err,data)=>{
        if(err){
            res.json({err:1,msg:"email or password is incorrect"})
        }else if(data==null){
            res.json({err:1,msg:"incorrect email"})
        }else{
            let payload={
                uid:email,
            };
            const token=jwt.sign(payload,jwtSECRET,{expiresIn:360000});
            res.json({err:0,msg:"login successful",token:token})
        }
    })
})
router.get("/user",(req,res)=>{
    console.log(req.body)
    userModel.find({},(err,data)=>{
        if (err) throw err;
        else{
            res.json({err:0,data:data})
        }
    })
})
//get pizza data
router.get("/pizzadata",(req,res)=>{
    console.log(req.body)
    pizzaModel.find({},(err,data)=>{
        if(err){
            res.json({err:1,msg:"not found"})
        }else{
            res.json({err:0,data:data})
        }
    })
})
router.post("/pizzacreate",(req,res)=>{
    console.log(req.body);
    let id=req.body.id;
    let pname=req.body.pname;
    let price=req.body.price;
    let image=req.body.image;
    let insp=new pizzaModel({id:id,pname:pname,price:price,image:image})
    insp.save((err)=>{
        if(err){
            res.send("already added id")
        }
        else{
            res.send("pizza added")
        }
    })
})
//get order
router.get("/orders",(req,res)=>{
    console.log(req.body);
    orderModel.find({},(err,data)=>{
        if(err){
            res.json({err:1,msg:"data not found"})
        }
        // }else if(data==null){
        //     res.json({err:1,msg:"no orders"})
        // }
        else{
            res.json({err:0,msg:"found all orders"})
        }
    })
})
//checkout
router.post("/checkout",(req,res)=>{
    console.log(req.body)
    let cart=req.body.cart;
    let total=req.body.total;
    let cardNum=req.body.cardNum;
    let email=req.body.email;
    let insc=new orderModel({cart:cart,total:total,cardNum:cardNum,email:email})
    insc.save((err)=>{
        if(err){
            res.json({err:1,msg:"already added"})
        }else{
            res.json({err:0,mag:"added"})
        }
    })
})
module.exports=router;
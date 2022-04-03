var express = require("express");
var bodyparser = require("body-parser");
const Order = require("../model/Order");
var router  = express.Router();

router.post("/place", async(req,res)=>{
    let body =req.body;
    let order= new Order();
    order.orderdate= new Date();
    order.productid = body.data.productid;
    order.size = body.data.size;
    order.color = body.data.color;
    order.name = body.data.name;
    order.email = body.data.email;
    order.mobileno = body.data.mobileno;
    order.pincode= body.data.pincode;
    order.quantity = body.data.quantity;
    order.price = body.data.price;
    order.shipping = body.data.shipping;
    order.total = body.data.total;
    order.status = "pending";

    order.place().then((result)=>{
        res.end(JSON.stringify(result))
    },err=>{
        res.end(JSON.stringify(err))
    
    })
});
router.post("/list", async (req, res) => {
    let orders = await Order.find();
    res.json({ data: orders });

});

router.post("/get", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);
    res.json({ data: order });

});

router.post("/changestatus", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);

    order.status = body.data.status;
    order.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
        console.log(err);
    });
});

router.post("/paymentsuccess", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);

    order.status = "paid";
    order.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
        console.log(err);
    });
});
module.exports = router; 
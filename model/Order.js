const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        orderdate: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobileno: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        shipping: {
            type: String,
            required: true
        },
        total: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }






    })
const Order = mongoose.model("order", schema);
module.exports = Order;
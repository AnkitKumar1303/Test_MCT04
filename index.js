const express = require('express');
const app = express();
const port = 3001;


const Razorpay=require("razorpay");
const cors=require("cors");


app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello world!");
});
app.post("/payment", async (req, res)=>{
    let {amount}=req.body;

    var instance = new Razorpay({ key_id: 'rzp_test_Bo9oZ7LjeoAkeF', key_secret: 'Vjfl0DiiEMPqYplL7zxNKC84' });

    let order=await instance.orders.create({
        amount: amount*100,
        currency: "INR",
        receipt: "receipt#1",
        })
        res.status(201).json({
            success:true,
            order,
            amount,
        });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
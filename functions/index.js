const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")("sk_test_51HQDHOG0TvrggPXhLMQQ3oKUGgEbtbOzlDdicEAzdf4dNrSTxhOXUqg5TMuOEKWBSsp5WobQ2Q1oIZldzwYwqCkH00ahp3WrjO")

// API

// App config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(cors())
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!! for this amount ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits of currency
        currency:"inr"
    })

    //  OK -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})

// listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-clone-d128f/us-central1/api the loacl url for firebase functions
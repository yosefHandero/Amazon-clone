const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51LyihhAh3lVK1KVSR9OorGn2CvJvNDsTxM9JIOPPo3WKW0sSEi4BVNtjzxTzGVRvszCr0yqZzP5YCPy8PHaXD0RM00mYBJD2jX"
)
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });



exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/maybatch-2022/us-central1/api
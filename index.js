const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

//heroku baseURL
const baseURL = "https://quiet-springs-47127.herokuapp.com/productServer";

// Axios with async/await
// Get Customers
app.get("/myserver/customers", async (req, res) => {
  try {
    let response = await axios.get(baseURL + "/customers");
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log(status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});

// Axios with async/await
// Get Products
app.get("/myserver/products", async (req, res) => {
  try {
    let response = await axios.get(baseURL + "/products");
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log(status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});

// Get with axios orders or product all or with id orders of products
app.get("/myserver/orders", async (req, res) => {
  const { cust, prod } = req.query;
  const params = {};
  if (cust) params.cust = cust;
  if (prod) params.prod = prod;
  try {
    let response = await axios.get(baseURL + "/orders", { params: params });
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log("Error:", status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});
//Get product with params
app.get("/myserver/orders/customer/:cust", async (req, res) => {
  try {
    let { cust } = req.params;
    let response = await axios.get(`${baseURL}/orders/customer/${cust}`);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log("Error:", status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});

//Get customers with params
app.get("/myserver/orders/product/:prod", async (req, res) => {
  try {
    let { prod } = req.params;
    let response = await axios.get(`${baseURL}/orders/product/${prod}`);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log("Error:", status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});

//Post orders with params
app.post("/myserver/orders", async (req, res) => {
  try {
    let body = req.body;
    let response = await axios.post(`${baseURL}/orders`, body);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    if (error.response) {
      let { status, statusText } = error.response;
      console.log("Error:", status, statusText);
      res.status(status).send(statusText);
    } else re.status(404).send(error);
  }
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

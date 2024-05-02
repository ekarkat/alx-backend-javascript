const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const options = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(options);
});

app.post('/login', (req, res) => {
  res.end(`Welcome ${req.body.userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

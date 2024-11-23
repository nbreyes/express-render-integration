
const express = require('express');
const productService = require('./product-service');
const path = require('path');
const router = express.Router();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/products', productService);

app.use('/', router);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


const express = require('express');
const productService = require('./product-service');
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html'));
    });

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

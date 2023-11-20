const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// API to add products to the database
router.post('/create', productController.addProduct);

// API to list products
router.get('/', productController.listProducts);

// API to delete products
router.delete('/:id', productController.deleteProduct);

// API to update the quantity of a product
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;

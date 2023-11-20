const Product = require('../models/productModel');

// Controller to add a new product
const addProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ data: { product } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to list all products
const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update the quantity of a product
const updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: parseInt(number) } },
      { new: true }
    );
    res.json({ data: { product, message: 'Updated successfully' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addProduct,
  listProducts,
  deleteProduct,
  updateQuantity,
};

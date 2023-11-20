const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 8000;

app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://venketeshmall2:rEntMpR79JfHRUIy@cluster0.8h30uat.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use product routes
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


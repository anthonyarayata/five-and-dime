const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/productModel');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const products = [
  {
    name: 'T-shirt 1',
    description: 'T-shirt design 1',
    price: 500,
    image: '/images/tshirt1.png',
    category: 'Shirts',
    stock: 100,
  },
  {
    name: 'T-shirt 2',
    description: 'T-shirt design 2',
    price: 500,
    image: '/images/tshirt2.png',
    category: 'Shirts',
    stock: 100,
  },
  // Add more product objects here as needed
];

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Insert new products
    console.log('Products have been seeded!');
    process.exit();
  } catch (error) {
    console.error(`Error seeding products: ${error.message}`);
    process.exit(1);
  }
};

seedProducts();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/Product'); 

const app = express();
const PORT = 4006;

// middleware
app.use(bodyParser.json());

mongoose.connect('mongodb://atlas-sql-6542a5998d5acb1164832fce-fu68y.a.query.mongodb.net/database?ssl=true&authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Route to insert sample data into the "products" collection
app.post('/api/insertSampleData', async (req, res) => {
  try {
    const sampleData = [
      {
        name: "Product 1",
        description: "Description for Product 1",
        price: 29.99,
        quantity: 50,
        category: "Men"
      },
      {
        name: "Product 2",
        description: "Description for Product 2",
        price: 39.99,
        quantity: 30,
        category: "Women"
      },
      {
        name: "Product 3",
        description: "Description for Product 3",
        price: 19.99,
        quantity: 70,
        category: "Teens"
      }
    ];

    const insertedProducts = await Product.insertMany(sampleData);
    res.json({ message: 'Sample data inserted successfully', data: insertedProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

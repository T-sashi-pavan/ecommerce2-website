const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Configure CORS to allow requests from your React frontend
app.use(cors({ origin: 'http://localhost:3000' }));  // Adjust origin as necessary
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommercecrackers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Define the Item schema and model
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// Define the Customer schema and model
const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerMobileNumber: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerAddress: { type: String, required: true },
  customerState: { type: String, required: true },
  totalCost: { type: Number, required: true }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

// Route to get all items
app.get('/',(req,res)=>{
  res.send("Background running perfectly")
})
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send({ message: "Error fetching items" });
  }
});

// Route to add a new item
app.post('/api/items', async (req, res) => {
  const { name, price, description, stock } = req.body;
  if (!name || !price || !stock) {
    return res.status(400).send({ message: "Please provide all required fields" });
  }

  try {
    const newItem = new Item({ name, price, description, stock });
    const savedItem = await newItem.save();
    res.status(201).send(savedItem);
  } catch (err) {
    res.status(500).send({ message: "Error adding item" });
  }
});

// Route to update an item by ID
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, stock } = req.body;

  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, price, description, stock }, { new: true });
    if (!updatedItem) {
      return res.status(404).send({ message: "Item not found" });
    }
    res.status(200).send(updatedItem);
  } catch (err) {
    res.status(500).send({ message: "Error updating item" });
  }
});

// Route to delete an item by ID
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).send({ message: "Item not found" });
    }
    res.status(200).send(deletedItem);
  } catch (err) {
    res.status(500).send({ message: "Error deleting item" });
  }
});

// Route to save customer data
app.post('/api/customers', async (req, res) => {
  const { customerName, customerMobileNumber, customerEmail, customerAddress, customerState, totalCost } = req.body;

  if (!customerName || !customerMobileNumber || !customerEmail || !customerAddress || !customerState || !totalCost) {
    return res.status(400).send({ message: "Please fill all required fields" });
  }

  try {
    const newCustomer = new Customer({
      customerName,
      customerMobileNumber,
      customerEmail,
      customerAddress,
      customerState,
      totalCost
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).send(savedCustomer);
  } catch (err) {
    console.error('Error saving customer:', err);
    res.status(500).send({ message: "Error saving order" });
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

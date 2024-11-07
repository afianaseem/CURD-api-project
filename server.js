const express = require('express');
const { readItems, createItem, updateItem, deleteItem } = require('./files');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Define the /users route to get all users
app.get('/users', async (req, res) => {
  try {
    const data = await readItems();
    res.json(data);
  } catch (err) {
    console.error("Error reading data:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Add more routes as needed:
// e.g., app.post('/users', (req, res) => { ... });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

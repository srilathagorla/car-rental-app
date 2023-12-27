// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Dummy data storage
const vendors = [];
const interactions = [];

// Vendor sign-up
app.post('/vendor/signup', (req, res) => {
  const { username, password } = req.body;
  vendors.push({ username, password });
  res.json({ message: 'Vendor signed up successfully' });
});

// Add car
app.post('/vendor/addcar', (req, res) => {
  const { carName, areaOfService } = req.body;
  // Add car logic here
  res.json({ message: 'Car added successfully' });
});

// Select location (Client)
app.post('/client/selectlocation', (req, res) => {
  const { location } = req.body;
  // Select location logic here
  res.json({ message: 'Location selected successfully' });
});

// Review interactions (Admin)
app.get('/admin/review', (req, res) => {
  res.json(interactions);
});

app.listen(PORT, () => {
  console.log(Server${PORT});
});
const express = require('express');
const router = express.Router();
const Login = require('../models/Login');

router.get('/', async (req, res) => {
  try {
    const items = await Login.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching username' });
  }
});
// Get a single item        
router.get('/:id', async (req, res) => {
  try {
    const item = await Login.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'username not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching username' });
  }
});

// Create a new item
router.post('/', async (req, res) => {
  try {
    const { username,gender,age,phone,dateOfBirth,password ,email,address,} = req.body;
    const item = new Login({
      username,
      gender,
      age, 
      phone,
      dateOfBirth,
      password,
      email,
      address,
    });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error creating username' });
  }
});

// Update an item
router.put('/:id', async (req, res) => {
  try {
    const {username,gender,age,phone,dateOfBirth,password ,email,address, } = req.body;
    const item = await Login.findByIdAndUpdate(
      req.params.id,
      {username,gender,age,phone,dateOfBirth,password ,email,address, },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'username not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating username' });
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const { sername,gender,age,phone,dateOfBirth,password ,email,address, } = req.body;
    const item = await Login.findByIdAndUpdate(
      req.params.id,
      { sername,gender,age,phone,dateOfBirth,password ,email,address,},
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'username not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating username' });
  }
});
// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const item = await Login.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'user not found' });
    }
    res.json({ message: 'userdetails deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting username' });
  }
});

module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path'); 
const express = require('express');
const app = express();

app.use(express.json());

let users = []; // Temporary storage. Replace with a database later.

app.use(express.static(path.join(__dirname, 'public')));

// Register User
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword, message: '' };
  users.push(user);
  res.status(201).json({ success: true });
});

// Login User
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, 'SECRET', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(400).json({ error: 'Invalid credentials' });
  }
});

// Create/Update Message
app.post('/message', (req, res) => {
    const { email, message } = req.body;

    const user = users.find(u => u.email === email);
    if (user) {
        user.message = message;
        res.status(200).json({ success: true, message });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Read Message
app.get('/message', (req, res) => {
    const { email } = req.query; 

    const user = users.find(u => u.email === email);
    if (user) {
        res.status(200).json({ message: user.message });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Delete Message
app.delete('/message', (req, res) => {
    const { email } = req.body;

    const user = users.find(u => u.email === email);
    if (user) {
        user.message = '';  // Clear the message
        res.status(200).json({ success: true });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

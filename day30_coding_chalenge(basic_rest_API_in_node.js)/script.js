const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET all users
app.get('/users', (req, res) => res.json(users));

// POST a new user
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));

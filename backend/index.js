const express = require('express');
const morgan = require('morgan')
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
 
app.use(express.static('dist'))
app.use(morgan('tiny'));

let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" },
  { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
];

app.get('/api/persons', (req, res) => {
  res.json(persons);
});
app.get('/info', (req, res) => {
  const count = persons.length;
  const date = new Date();
  
  res.send(`
    <p>Phonebook has info for ${count} people</p>
    <p>${date}</p>
  `);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id); 
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person); 
  } else {
    res.status(404).json({ error: "Person not found" }); 
  }
});
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id); 
  const initialLength = persons.length;
  persons = persons.filter(p => p.id !== id);

  if (persons.length < initialLength) {
    res.status(204).end(); 
  } else {
    res.status(404).json({ error: "Person not found" }); 
  }
});
app.post('/api/persons', (req, res) => {
  const body = req.body;

  
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Name or number missing' });
  }

  
  if (persons.some(p => p.name === body.name)) {
    return res.status(400).json({ error: 'Name must be unique' });
  }

  
  const newPerson = {
    id: Math.floor(Math.random() * 1000000), 
    name: body.name,
    number: body.number
  };

  persons.push(newPerson); 
  res.json(newPerson); 
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

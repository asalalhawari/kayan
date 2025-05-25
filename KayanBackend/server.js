

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  }));
const contactRoutes = require('./routes/contactRoutes');

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
    res.send('hello in backend');
});

app.listen(PORT, () => {
    console.log(`The server is running onhttp://localhost:${PORT}`);
});
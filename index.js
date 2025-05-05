import express from "express";
import ItemsRoute from './routes/items.js'
const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/items', ItemsRoute)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, console.log(`Server running on localhost:${PORT}`))
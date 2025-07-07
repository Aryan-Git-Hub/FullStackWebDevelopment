import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(typeof(req.body));
  res.send(`Received submission: Name - ${name}, Email - ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

function customMiddleware(req, res, next) {
  console.log("Custom middleware executed");
  console.log(`Request Method: ${req.method}`);
  next(); // Pass control to the next middleware or route handler
  console.log("Custom middleware completed");
}
app.use(customMiddleware);

app.get('/', (req, res) => {
  console.log("Request received at root endpoint");
  res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(typeof(req.body), req.body);
  res.send(`Received submission: Name - ${name}, Email - ${email}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
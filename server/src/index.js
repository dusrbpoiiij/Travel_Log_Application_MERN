const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // .env file 읽어옴

const middleware = require('./middlewares');
const logs = require('./api/logs');

// Main File과 dedicated to middle ware 만 남기고 나머지는 다른 file에...
const app = express();

// MongoDB Connect
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

app.use('/api/logs', logs);
app.use('/api/logs', logs);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}}`);
});

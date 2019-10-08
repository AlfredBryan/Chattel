const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('./middlewares/errorhandler');
const auth = require('./routes/auth');
const property = require('./routes/property');

// set web server port according to environment
const port = () => {
  if (process.env.NODE_ENV === 'test') {
    return 4000;
  }
  return process.env.PORT || 8080;
};

// load configuration file
dotenv.config();

// parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logger
app.use(logger('dev'));

// use cross origin module
app.use(cors('*'));

// set authentication api routes
app.use(auth);

// set property api routes
app.use(property);

// set error handler
app.use(errorHandler);

// 404 error
app.use((_req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'api endpoint not found',
  });
});

// set web server port
app.listen(port(), () => {
  /* eslint-disable no-console */
  console.log(`server started at port ${port()}`);
});
module.exports = app;

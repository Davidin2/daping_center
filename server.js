require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

const { PORT } = process.env;


const {
  deleteLogs,
  getRangos
} = require('./controllers');



// Logger..
app.use(morgan(':date[clf] :remote-addr :method :url :status'));

// Traduce el body y lo transforma en un objeto JS.
app.use(express.json());


app.get('/deletelogs', deleteLogs);

app.get('/getrangos', getRangos);


/**
 * #######################
 * ## Error & Not Found ##
 * #######################
 */

// Middleware de error.
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

// Middleware de not found.
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);

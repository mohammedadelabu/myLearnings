const Joi = require('joi');
const express = require('express');
const app = express();
const customers = require('./routes/customers');
const home = require('./routes/home')
app.use(express.json());

app.use('/api/customers', customers);
app.use('/', home);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`listening on port ${port}`))
/**
 * Api routes
 * -login
 * -signup
 */
const express = require('express');
const cors = require('cors');
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signup');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();


app.use('/api/login',loginRoute);
app.use('/api/signup',signUpRoute);

app.listen(process.env.PORT, ()=>console.log('listen ', process.env.PORT))

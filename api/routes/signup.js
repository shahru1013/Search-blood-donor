/**
 * Adding user into database
 * -api/signup/addUser
 */
const router = require("express").Router();
const dbConnection = require('../models/db');
const registerUser  = require("../models/insertTables");
router.post('/addUser', async (req, res)=>{
    await registerUser(req.body.formData, dbConnection, res);
});

module.exports = router;
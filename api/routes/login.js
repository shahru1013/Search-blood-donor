/**
 * Fetch user and check validity
 * -api/login/validity
 */
const router = require("express").Router();
const dbConnection = require('../models/db');
const fetchUser = require("../models/fetchUser");
router.get('/validity', async (req, res)=>{
    await fetchUser(req.query, dbConnection, res);
});

module.exports = router;
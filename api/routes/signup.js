/**
 * Adding user into database
 * -api/signup/addUser
 */
const router = require("express").Router();
router.get('/addUser', async (req, res)=>{
    res.send({
        res: true
    })
})

module.exports = router;
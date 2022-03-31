/**
 * Fetch user and check validity
 * -api/login/validity
 */
const router = require("express").Router();
router.get('/validity', async (req, res)=>{
    res.send({
        res: true
    })
})

module.exports = router;
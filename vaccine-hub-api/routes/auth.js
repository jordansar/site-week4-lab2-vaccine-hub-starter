const express = require("express")
const router = express.Router()


router.post("/login", async (req, res, next) => {
    try {
        // take the users email and password and attempting to authenticate
        
    } catch (error) {
        next(error)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // take the user email, password, 
        
    } catch (error) {
        next(error)
    }
})


module.exports = router
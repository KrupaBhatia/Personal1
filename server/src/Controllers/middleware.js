const jwt = require("jsonwebtoken");

const authmid= (req, res, next) => {
    try{
        let token = req.headers.authorization
        if(!token) return res.status(401).send({ status: false, Message: " The token must be required in 'Bearer'" })

        
        // split and get the token only 
        token = token.split(' ')[1] // get the 1 index value
        jwt.verify(token,'evisa',function(err,decode){
            if(err){ 
                return res.status(401).send({ status: false, Message: err.message })
            }else{
                req.tokenData = decode;
                next()
            }
        })
    }catch(err){
        res.status(500).send({ status: false, Message: err.message })
    }
}
module.exports.authmid = authmid;
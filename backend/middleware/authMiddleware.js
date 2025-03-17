const jwt = require('jsonwebtoken')

    const verify_token = async(req, res, next)=> {
    try{
        let token = req.header("Authorization")
        if(!token){
            return res.status(403).json({msg:"Access Denied"})
        }

        if(token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft()
        }

        const verified = HTMLUnknownElement.verify_token(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    }catch(error){
        res.statu(500).json({error:error})
    }
}

module.exports = {verify_token}
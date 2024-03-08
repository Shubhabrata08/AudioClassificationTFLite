const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET_KEY
const auth = (req,res,next)=>{
    try{
       let token = req.headers.authorization
       if(token)
       {
        token = token.split(" ")[1]
        let user = jwt.verify(token,SECRET_KEY)
        req.userId = user.id
        next()
       }
       else if (req.session.user) { // Check for session data
        req.userId = req.session.user._id;
        next();
       }
       else{
        res.status(401).json({message: "Unauthorised User"})
       }
    }
    catch(error)
    {
        console.log(error)
        res.status(401).json({message: "Unauthorised User"})
    }
}

module.exports = auth
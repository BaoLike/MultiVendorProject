const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
    const {accessToken} = req.cookies;
    if(!accessToken) {
        return res.status(409).json({error: 'Please login first'});
    }
    else{
        try{
            const jwtDecode = jwt.verify(accessToken, process.env.SECRET);
            req.role = jwtDecode.role;
            req.id = jwtDecode.id;
            next();
        }
        catch{
            return res.status(409).json({error: 'Please login first'});
        }
    }
}
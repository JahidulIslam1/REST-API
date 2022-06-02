const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1] //token er age bearer likha theke tai token er age space niyechi and 1 e token thakbe
        const decode = jwt.verify(token, 'SECRET')
        
        req.user = decode
        next()

    } catch (error) {
        res.json({
            message: 'Authentication Failed'
        })
    }
}


module.exports = authenticate
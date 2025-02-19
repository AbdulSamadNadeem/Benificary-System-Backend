const jwt = require('jsonwebtoken')

exports.TokenGen =  (id) => {
     return jwt.sign({id} , process.env.SECRET_KEY)
}
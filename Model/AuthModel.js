const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const AuthSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})
AuthSchema.pre('save' , async function (next) {
    const user = this
    if(!user.isModified('password')){
        return next()
    }
    try{
        user.password = await bcrypt.hash(user.password , 10)
    }catch(err){
        next(err)
    }
})
AuthSchema.methods.comparePass = async (pass , dbpass) => {
     return await bcrypt.compare(pass,dbpass)
}

const AuthModel = mongoose.model('receptionist' , AuthSchema)

module.exports = AuthModel
const app = require('./app')
const port  = process.env.PORT || 8080
const mongoose = require('mongoose')

mongoose.connect(process.env.CONN_STR)
.then((db)=>{
    console.log('db connected successfully')
})
.catch((error)=>{
    console.log(error)
})

app.listen(port , ()=>{
    console.log(`Server is running on Port ${port}`)
})
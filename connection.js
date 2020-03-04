const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shiv:uzzawal12@cluster0-p94fr.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:  true, useUnifiedTopology: true})
const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('connected to Data Base')
    }
)

const Notes =new mongoose.Schema({
    note: String
    },
    {strict:false}
)

const datamodel = mongoose.model('datas',Notes )
module.exports = datamodel
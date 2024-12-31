const mongoose = require("mongoose")
const newusersSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  email:{
    type:String,
  },
  phone:{
    type:Number,
  },
  city:{
    type:String,
  },
  age:{
    type:String,
  },
  password:{
    type:String,
  },
  mypic:{
    type:String,
  },
  status:{
    type:Number
  }
})

const newusersModel = mongoose.model("newusers", newusersSchema)
module.exports = newusersModel
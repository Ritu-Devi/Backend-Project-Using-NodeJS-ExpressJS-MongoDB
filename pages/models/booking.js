const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.ObjectId,
        ref:'rooms',
        required: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
          ref:'newusers',
        required: true
    },
    checkIn: {
        type: String,
        required: true
    }, 
    checkOut: {
        type: String,
        required: true
    }, 
   
   roomNo: {
        type: Number, 
        required: true 
    },
    // wifi: { 
    //     type: String,
    //     enum: ['Avaliable', 'Not Avaliable'], 
    //     required: true 
    // },
    // price: {
    //     type: Number, 
    //     required: true 
    // },
    message: { 
        type: String, 
        required: true 
    },
    status:{
        type: Number,
        default: 0
    
      },
  
});

const bookingModel = mongoose.model("booking", bookingSchema)
module.exports = bookingModel
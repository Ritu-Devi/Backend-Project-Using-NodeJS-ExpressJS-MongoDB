const mongoose = require("mongoose")
const roomsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bed: {
        type: Number,
        required: true 
    },
    bath: {
         type: Number, 
         required: true
        },
    price: {
        type: Number, 
        required: true 
    },
    // wifi: { 
    //     type: String,
    //     enum: ['Avaliable', 'Not Avaliable'], 
    //     required: true 
    // },
    description: { 
        type: String, 
        required: true 
    },
    roompic: { 
        type: String 
    } 
});

const roomsModel = mongoose.model("rooms", roomsSchema)
module.exports = roomsModel
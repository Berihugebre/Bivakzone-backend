const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    bivakId:{
        type:String,
        required: true,
      },
    name:{
        type: String,
        required:true
    },
    message:{
        type:String,
        required: true
    },
    date :{
        type: Date,
        required: true,
        default: Date.now()

    }
});

module.exports=mongoose.model('Comment', commentSchema);
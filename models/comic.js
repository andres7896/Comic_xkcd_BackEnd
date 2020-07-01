const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let comic = new Schema ({
    num:{
        type: String,
        require: [true, 'num of comic is required']
    },
    score:{
        type: String,
        require: [true, 'The score is required']
    }
})

module.exports = mongoose.model('Comic', comic);
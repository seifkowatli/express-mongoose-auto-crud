const mongoose = require('mongoose'); 

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
},{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt : 'updated_at'
    }
});


module.exports = mongoose.model('item', itemSchema);
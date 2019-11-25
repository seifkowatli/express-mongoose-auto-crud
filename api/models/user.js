const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    isConfirmed : {
        type : Boolean,
        default : false
    }
},{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt : 'updated_at'
    }
});

userSchema.post('save', async function(){
    try {
        if(this.name == "salim")
    {
        await mongoose.model('User').updateMany({},{
            $set:{
                email:"same"
            }
        });

    }
        
    } catch (error) {
        console.log(error.message);
    }
    
      
})

module.exports = mongoose.model('User', userSchema);

// mySchema.pre('update', function() {
//     if (this.getUpdate().email) {
//       // Run job
//     }
//   });
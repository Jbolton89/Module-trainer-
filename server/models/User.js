import { isEmail } from 'validator';

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');




const UserSchema = new Schema({
    firstName: { 
        type: String, 
        trim: true, 
        required: "You will need at least a first name"
    }, 

    lastName: { 
        type: String, 
        trim: true, 

    },

    email: { 
        type: String, 
        trim: true,
        lowercase: true,
        unique: true,
        validate: [isEmail, 'Please fill a valid email address'],
    },

    password: {
        type: String,
        trim: true,
        required: true,
        validate: [({ length }) => length >=8, "Password needs to be at least 8 characters!"],

    },

    userRating: [{ 
        by: {
            type: Schema.Types.ObjectId,
            userRating: { 
                type: Number, 
                min: 1,
                max: 10, 
                // validate: ratingValidator
            }
        }}
    ],


    lessons: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Lesson'
        }
    ], 



    userCreated: { 
        type: Date, 
        default: Date.now
    },

    fullName: String,

    lastLoggedIn: Date, 


});

// Bcrypt - need to check if correct 
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  
UserSchema.methods.setFullName = function() { 
    this.fullName = `${this.firstname} ${this.lastname}`; 

    return this.fullName; 
}; 

UserSchema.methods.lastUpdatedDate = function() { 
    this.lastLoggedIn = Date.now()
}

const User = mongoose.model("User", UserSchema)



module.exports = User;


// Need to set up middleware bcrypt (set pre and static)


// Set up pre-save middleware to create password 

// Compare incoming password with hashed password

// go through examples for different middleware etc






const { isEmail } = require('validator');
const Lesson = require('./Lesson');

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');




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

    hasCompleted: [Lesson.schema], 
        title: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Lesson' 
            }],

                    
        
        
       
    


    userCreated: { 
        type: Date, 
        default: Date.now
    },

    fullName: String,

    lastLoggedIn: Date, 

    // lessons: [Lesson.schema],
    //  title: [{ 
    //         type: Schema.Types.ObjectId, 
    //         ref: 'Lesson',
    //     }] 
    


});


UserSchema.pre('save', async function (next) {
    console.log(this)
    console.log(this.password)
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
  
  // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
//   };
  
  UserSchema.methods.isCorrectPassword = async function (password) {
      console.log(this)
      console.log(this.password)
      console.log(password)
//     // const result = await bcrypt.compare(password, this.password);
//     // console.log(result)
//     // return result
    return password === this.password;
  };

  
UserSchema.methods.setFullName = function() { 
    this.fullName = `${this.firstname} ${this.lastname}`; 

    return this.fullName; 
}; 

UserSchema.methods.passwordCheck = async function (password) { 
    return bcrypt.compare(password, this.password)
};


UserSchema.methods.lastUpdatedDate = function() { 
    this.lastLoggedIn = Date.now()
}

const User = mongoose.model("User", UserSchema)



module.exports = User;






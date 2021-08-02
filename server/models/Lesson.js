const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const LessonSchema = new Schema ({ 

    // id is created automatically by mongoDB? 

    title: { 
        type: String, 
        trim: true, 
        required: "Lesson needs a title",
    },

    subject: { 
        type: String, 
        trim: true, 
    },

    

})

const User = mongoose.model("Lesson", LessonSchema)

module.exports = Lesson;
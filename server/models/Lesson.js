const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const LessonSchema = new Schema ({ 


    title: { 
        type: String, 
        trim: true, 
    },

    subject: { 
        type: String, 
        trim: true, 
    },

    completed: {
        type: Boolean
    }
    

});

const Lesson = mongoose.model("Lesson", LessonSchema)

module.exports = Lesson;
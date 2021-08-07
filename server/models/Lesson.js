const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const LessonSchema = new Schema ({ 


    title: { 
        type: String, 
        trim: true, 
        required: "Lesson needs a title",
    },

    subject: { 
        type: String, 
        trim: true, 
    },

    

});

const Lesson = mongoose.model("Lesson", LessonSchema)

module.exports = Lesson;
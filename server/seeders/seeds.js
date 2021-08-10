const db = require('../config/connection');
const { User, Lesson } = require('../models'); 
const userSeeds = require('./userSeeds.json');
const lessonSeeds = require('./lessonSeeds.json')

db.once('open', async () => { 
    try { 
        await User.deleteMany({}); 
        await Lesson.deleteMany({});
        await User.insertMany(userSeeds);
        await Lesson.insertMany(lessonSeeds);

        console.log('successfully seeded'); 
        process.exit(0); 
    } catch (err) { 
        throw err;
    }
});
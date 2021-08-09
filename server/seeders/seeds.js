const db = require('../config/connection');
const { User, Lesson } = require('../models'); 
const { userSeeds, lessonSeeds} = require('./userSeeds.json');

db.once('open', async () => { 
    try { 
        await User.deleteMany({}); 
        await Lesson.deleteMany({});
        await User.create(userSeeds);
        await Lesson.create(lessonSeeds);

        console.log('successfully seeded'); 
        process.exit(0); 
    } catch (err) { 
        throw err;
    }
});
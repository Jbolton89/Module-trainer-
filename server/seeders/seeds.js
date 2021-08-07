const db = require('../config/connection');
const { User, Lesson } = require('../models'); 
const userSeeds = require('./userSeeds.json');

db.once('open', async () => { 
    try { 
        await User.deleteMany({}); 
        await User.create(userSeeds);

        console.log('successfully seeded'); 
        process.exit(0); 
    } catch (err) { 
        throw err;
    }
});
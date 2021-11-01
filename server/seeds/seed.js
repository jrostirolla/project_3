const db = require('../config/connection');
const { User, Builder, Fish } = require('../models');
const fishSeeds = require('./fish.json');

db.once('open', async () => {
    try {
        await Fish.deleteMany({});

        await Fish.create(fishSeeds);

    } catch (err) {
        console.log(`WARNING: Seeder failed! \n`)
        console.log(err);
        process.exit(1);
    }
    
    console.log('Seed successful: Fish are now added into the system');
    process.exit(0);
});
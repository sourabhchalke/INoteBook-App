
const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('Connection successful!....');
    } catch (err) {
        console.error('Connection failed:', err);
    }
};

module.exports=connectToMongo;

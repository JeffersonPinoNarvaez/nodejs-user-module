const moongose = require('mongoose');

const connection = async () => {
    try {
        moongose.set('strictQuery', false);
        moongose.connect(process.env.DATABASE_CNN);
        console.warn("Application successfully connected to moongose database");
    } catch (error) {
        console.error("Mongo Db Connection error: " + error);
        throw new Error("Database Initialization Error");
    }
}

module.exports = {
    connection
};
const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://udayrana428:surendra@cluster0.px7ut.mongodb.net/inotebook?retryWrites=true&w=majority'
// const mongoUri = 'mongodb://localhost:27017/inotebook'
const dance="hello"
const connectToMongo = () => {
    mongoose.connect(mongoUri, () => {
        console.log("connection was successfully implied")
    });
}

module.exports = connectToMongo
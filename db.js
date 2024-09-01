const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/inotebook"

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to MongoDB");
//     })
// }

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB:', error);
    }
};

module.exports=connectToMongo;
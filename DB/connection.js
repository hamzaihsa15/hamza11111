const mongoose = require('mongoose');

const URI='mongodb+srv://hamza:1234@cluster0.kdzfc.mongodb.net/cluster0?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;

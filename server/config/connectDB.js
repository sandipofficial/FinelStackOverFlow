import mongoose from "mongoose";


const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.CONNECTION_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    console.log(`Connected to MongoDB successfully`.bgGreen.white)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white)
  }
}

export default connectDB

const mongoose = require('mongoose');

// ... Other configurations and code ...

// Set the strictQuery option to false to prepare for Mongoose 7's default behavior.
mongoose.set('strictQuery', false);

// Connect to MongoDB using mongoose.connect()
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(`MongoDB Error: ${error}`.bgRed.white));

import mongoose from 'mongoose';


// function that will run to connect to our database with the connection string
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch(error){
    console.log('Error');
    process.exit(1);  // 1 means failure, 0 means success
  }
}
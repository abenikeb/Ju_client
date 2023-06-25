import mongoose from 'mongoose';

let MONGODB_URI = process.env.MONGODB_URI

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "users",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
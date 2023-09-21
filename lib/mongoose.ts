import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB URL not found');
    if(isConnected) return console.log('Already connected');


    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Connected")
    }catch (error) {
        console.log(error)
    }
}

export const disconnectToDB = async () => {
    try{
        await mongoose.connection.close();
        isConnected = false;
        console.log("Disconnected")
    }catch (error) {
        console.log(error)
    }
}



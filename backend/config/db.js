import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}📦`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // 1 indicates an error, 0 indicates success
    }
}

export default connectDB;
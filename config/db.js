import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anantsaxena5454:iC5XkuERMIczGPx3@cluster0.fqwqalu.mongodb.net/food-del').then(()=> console.log("Db Connected"))
};
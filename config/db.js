import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anantsaxena5454:LyhR-cj!PK86Pix@cluster0.k1cjcl4.mongodb.net/food-del').then(() => console.log("Db Connected"));
}
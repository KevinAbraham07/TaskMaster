import mongo from "mongoose";
export const connectDB = async () => {
  try {
    const connect = await mongo.connect(`${process.env.MONGO_URI}`);
    if (connect) {
      console.log("Mongo Connected");
    }
  } catch (err) {
    console.log("Could not connect to Mongo");
    res.status(500);
  }
};

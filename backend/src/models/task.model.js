import mongo from "mongoose";

const taskSchema = new mongo.Schema({
  task: {
    type: String,
    required: true,
  },

  deadline: {
    type: String,
  },
});

export default mongo.model("Task", taskSchema);

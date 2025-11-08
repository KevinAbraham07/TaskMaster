import Task from "../models/task.model.js";

export const submit = async (req, res) => {
  try {
    const { task, deadline } = req.body;

    const existask = await Task.findOne({ task, deadline });
    if (existask) {
      return res.status(400).json({
        message: "Task with the same name and deadline already exists!",
      });
    }
    const newTask = new Task({
      task,
      deadline,
    });

    await newTask.save();
    return res.status(200).json({ message: newTask });
  } catch (err) {
    console.log("Internal Server Error");
    res.status(500).json({ message: "Error in submit route" });
  }
};

export const show = async (req, res) => {
  try {
    const response = await Task.find();
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error in show page" });
  }
};

export const deleteAllTasks = async (req, res) => {
  try {
    const result = await Task.deleteMany({}); // deletes all documents in Task collection
    res.status(200).json({
      message: "All tasks deleted successfully!",
      deletedCount: result.deletedCount, // number of deleted documents
    });
  } catch (err) {
    console.error("Error deleting tasks:", err);
    res.status(500).json({ message: "Error deleting all tasks" });
  }
};

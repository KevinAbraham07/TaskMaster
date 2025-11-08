import React, { useState } from "react";
import axios from "axios";

const Sub = ({ setTaskAdded }) => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/task/submit", {
        task,
        deadline,
      });
      alert("Task Updated");
      setTaskAdded((prev) => !prev);
      setDeadline("");
      setTask("");
    } catch (err) {
      console.log("Error in Submitting Front", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          name="task"
          className="task-input"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task Name"
          required
        />
        <input
          type="date"
          value={deadline}
          name="deadline"
          className="task-input"
          placeholder="Deadline"
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <input type="submit" value="Add to Tasks" />
      </form>
    </div>
  );
};

export default Sub;

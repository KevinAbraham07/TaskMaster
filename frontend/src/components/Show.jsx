import React, { useEffect, useState } from "react";
import axios from "axios";
const Show = ({ taskAdded }) => {
  const [tasks, setTasks] = useState([]);
  const fetchTask = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/task/show");
      setTasks(res.data);
    } catch (err) {
      console.log("Error Fetching Data", err);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [taskAdded]);

  return (
    <div className="task-container">
      <div className="task-list">
        {tasks.length === 0 ? (
          <h2 className="task-title">No tasks available.</h2>
        ) : (
          <>
            <h2 className="task-title">Tasks for now:</h2>
            <ul>
              {tasks.map((t) => (
                <li key={t._id} className="task-item">
                  <span>{t.task}</span>
                  <span>{t.deadline}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Show;

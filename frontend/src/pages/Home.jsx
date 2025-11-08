import React from "react";
import Sub from "../components/Sub.jsx";
import Show from "../components/Show.jsx";
import { useState } from "react";

const Home = () => {
  const [taskAdded, setTaskAdded] = useState(false);
  return (
    <div>
      <Sub setTaskAdded={setTaskAdded} />
      <Show taskAdded={taskAdded} />
    </div>
  );
};

export default Home;

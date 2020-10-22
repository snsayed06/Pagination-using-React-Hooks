import React from "react";
import Progress from "./Progress";
const ProgressBar = () => {
  const data = [
    {
      bgcolor: "#6a1b9a",
      completed: 60,
    },
    {
      bgcolor: "#6a1b9a",
      completed: 80,
    },
  ];

  return (
    <div>
      {data.map((element, i) => (
        <Progress
          key={i}
          bgcolor={element.bgcolor}
          completed={element.completed}
        />
      ))}
    </div>
  );
};

export default ProgressBar;

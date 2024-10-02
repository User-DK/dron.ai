
// import React, { useState } from "react";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./Deadline.css"; // Custom CSS styles for dark theme

// function Deadline() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null); // Store selected date
//   const [selectedTime, setSelectedTime] = useState(null); // Store selected time

//   const addTask = () => {
//     if (input.trim() && selectedDate && selectedTime) {
//       const dueDate = dayjs(selectedDate)
//         .set("hour", selectedTime.hour())
//         .set("minute", selectedTime.minute());

//       setTasks([...tasks, { text: input, completed: false, dueDate }]);
//       setInput("");
//       setSelectedDate(null);
//       setSelectedTime(null); // Reset fields after adding the task
//     }
//   };

//   const toggleTask = (index) => {
//     const newTasks = tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(newTasks);
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="deadline">
//       <div className="task-section">
//         <h2 style={{ color: "#f44336" }}>
//           Deadlines{" "}
//           <span role="img" aria-label="calendar">
//             📅
//           </span>
//         </h2>
//         {tasks.length === 0 ? (
//           <div className="no-tasks" style={{ color: "#a8ff61" }}>
//             Nothing due
//           </div>
//         ) : (
//           <ul className="task-list">
//             {tasks.map((task, index) => (
//               <li
//                 key={index}
//                 className={task.completed ? "task completed" : "task"}
//               >
//                 <span onClick={() => toggleTask(index)}>
//                   {task.text} (Due: {task.dueDate.format("DD-MM-YYYY HH:mm")})
//                 </span>
//                 <Button
//                   className="completed-button"
//                   variant="contained"
//                   color="secondary"
//                   style={{ backgroundColor: "#a8ff61" }}
//                   onClick={() => deleteTask(index)}
//                 >
//                   Completed
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="input-container">
//         <TextField
//           label="Task"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new Deadline"
//           fullWidth
//           margin="normal"
//         />

//         <DatePicker
//           label="Pick a date"
//           value={selectedDate}
//           onChange={(newDate) => setSelectedDate(newDate)}
//           renderInput={(params) => <TextField {...params} margin="normal" />}
//         />

//         <TimePicker
//           label="Pick time"
//           value={selectedTime}
//           onChange={(newTime) => setSelectedTime(newTime)}
//           renderInput={(params) => <TextField {...params} margin="normal" />}
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           style={{ backgroundColor: "#004582" }}
//           onClick={addTask}
//         >
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Deadline;


import React, { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import "./Deadline.css"; // Custom CSS styles for dark theme

function Deadline() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Store selected date
  const [selectedTime, setSelectedTime] = useState(null); // Store selected time

  const addTask = () => {
    if (input.trim() && selectedDate && selectedTime) {
      const dueDate = dayjs(selectedDate)
        .set("hour", selectedTime.hour())
        .set("minute", selectedTime.minute());

      setTasks([...tasks, { text: input, completed: false, dueDate }]);
      setInput("");
      setSelectedDate(null);
      setSelectedTime(null); // Reset fields after adding the task
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="deadline">
      <div className="task-section">
        <h2 style={{ color: "#f44336" }}>
          Deadlines{" "}
          <span role="img" aria-label="calendar">
            📅
          </span>
        </h2>
        {tasks.length === 0 ? (
          <div className="no-tasks" style={{ color: "#a8ff61" }}>
            Nothing due
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.completed ? "task completed" : "task"}
              >
                <span onClick={() => toggleTask(index)}>
                  {task.text} (Due: {task.dueDate.format("DD-MM-YYYY HH:mm")})
                </span>
                <Button
                  className="completed-button"
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: "#a8ff61" }}
                  onClick={() => deleteTask(index)}
                >
                  Completed
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="input-container">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new Deadline"
          fullWidth
          variant="outlined"
          margin="normal"
          color="neutral"
        />

        <DatePicker
          label="Pick a date"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          renderInput={(params) => <Input {...params} margin="normal" />}
          sx={{
            label: {
              color: "white",
              fontSize: "1.2rem",
            },
          }}
        />

        <TimePicker
          label="Pick time"
          value={selectedTime}
          onChange={(newTime) => setSelectedTime(newTime)}
          renderInput={(params) => (
            <Input {...params} margin="normal" color="red" />
          )}
          sx={{
            label: {
              color: "white",
              fontSize: "1.2rem",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#004582" }}
          onClick={addTask}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default Deadline;

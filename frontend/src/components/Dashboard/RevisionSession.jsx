// import React, { useState } from "react";
// import { DatePicker, TimePicker } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import "./Revision.css";

// function Revision() {
//   const [revisionData, setRevisionData] = useState({
//     subject: "",
//     frequency: "daily",
//     time: dayjs(),
//     startDate: dayjs(),
//     duration: 30,
//     reminders: false,
//     notes: "",
//   });

//   // Handle form changes
//   const handleChange = (e) => {
//     setRevisionData({ ...revisionData, [e.target.name]: e.target.value });
//   };

//   const handleTimeChange = (newTime) => {
//     setRevisionData({ ...revisionData, time: newTime });
//   };

//   const handleDateChange = (newDate) => {
//     setRevisionData({ ...revisionData, startDate: newDate });
//   };

//   const toggleReminders = () => {
//     setRevisionData({ ...revisionData, reminders: !revisionData.reminders });
//   };

//   // Submit handler for scheduling revision
//   const handleSchedule = () => {
//     console.log("Scheduled Revision:", revisionData);
//     // Save or process the revision schedule here
//   };

//   return (
//     <div className="revision">
//       <h2>Schedule Your Revision</h2>

//       <div className="input-container">
//         <TextField
//           label="Revision Topic/Subject"
//           variant="outlined"
//           name="subject"
//           value={revisionData.subject}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           placeholder="Enter Subject/Topic"
//         />

//         <TextField
//           label="Frequency"
//           select
//           name="frequency"
//           value={revisionData.frequency}
//           onChange={handleChange}
//           fullWidth
//           SelectProps={{
//             native: true,
//           }}
//           margin="normal"
//         >
//           <option value="daily">Daily</option>
//           <option value="weekly">Weekly</option>
//           <option value="monthly">Monthly</option>
//         </TextField>

//         <TimePicker
//           label="Preferred Time"
//           value={revisionData.time}
//           onChange={handleTimeChange}
//           renderInput={(params) => (
//             <TextField {...params} fullWidth margin="normal" />
//           )}
//         />

//         <DatePicker
//           label="Start Date"
//           value={revisionData.startDate}
//           onChange={handleDateChange}
//           renderInput={(params) => (
//             <TextField {...params} fullWidth margin="normal" />
//           )}
//         />

//         <TextField
//           label="Duration (in minutes)"
//           type="number"
//           name="duration"
//           value={revisionData.duration}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           placeholder="Enter Duration"
//         />

//         <div className="reminder-container">
//           <label>Set Reminders</label>
//           <Checkbox
//             checked={revisionData.reminders}
//             onChange={toggleReminders}
//             color="primary"
//           />
//         </div>

//         <TextField
//           label="Notes"
//           multiline
//           rows={4}
//           name="notes"
//           value={revisionData.notes}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           placeholder="Any specific goals or notes"
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSchedule}
//           fullWidth
//           sx={{ marginTop: "20px" }}
//         >
//           Schedule Revision
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Revision;

import React, { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./Revision.css";

function Revision() {
  const [revisionData, setRevisionData] = useState({
    subject: "",
    frequency: "daily",
    time: dayjs(),
    startDate: dayjs(),
    duration: 30,
    reminders: false,
    notes: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    setRevisionData({ ...revisionData, [e.target.name]: e.target.value });
  };

  const handleTimeChange = (newTime) => {
    setRevisionData({ ...revisionData, time: newTime });
  };

  const handleDateChange = (newDate) => {
    setRevisionData({ ...revisionData, startDate: newDate });
  };

  const toggleReminders = () => {
    setRevisionData({ ...revisionData, reminders: !revisionData.reminders });
  };

  // Submit handler for scheduling revision
  const handleSchedule = () => {
    console.log("Scheduled Revision:", revisionData);
    // Process the revision schedule (e.g., save to backend)
  };

  return (
    <div className="revision">
      <h2 style={{color:"#00b3ff"}}>Schedule Your Revision</h2>

      <div className="input-container">
        <Input
          label="Revision Topic/Subject"
          name="subject"
          value={revisionData.subject}
          onChange={handleChange}
          fullWidth
          placeholder="Enter Subject/Topic"
          variant="outlined"
          margin="normal"
        />

        <Input
          label="Frequency"
          select
          name="frequency"
          value={revisionData.frequency}
          onChange={handleChange}
          fullWidth
          margin="normal"
          native
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Input>

        <TimePicker
          label="Preferred Time"
          value={revisionData.time}
          onChange={handleTimeChange}
          renderInput={(params) => (
            <Input
              {...params}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                placeholder: { color: "white" },
              }}
            />
          )}
          sx={{
            label: {
              color: "white",
              fontSize: "1.2rem",
            },
          }}
        />

        <DatePicker
          label="Start Date"
          value={revisionData.startDate}
          onChange={handleDateChange}
          renderInput={(params) => (
            <Input {...params} fullWidth margin="normal" variant="outlined" />
          )}
          sx={{
            label: {
              color: "white",
              fontSize: "1.2rem",
            },
          }}
        />

        <Input
          label="Duration (in minutes)"
          type="number"
          name="duration"
          value={revisionData.duration}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="Enter Duration"
        />

        <div className="reminder-container">
          <label>Set Reminders</label>
          <Checkbox
            checked={revisionData.reminders}
            onChange={toggleReminders}
            color="primary"
          />
        </div>

        <Input
          label="Notes"
          multiline
          rows={4}
          name="notes"
          value={revisionData.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder="Any specific goals or notes"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSchedule}
          fullWidth
          sx={{ marginTop: "20px" }}
        >
          Schedule Revision
        </Button>
      </div>
    </div>
  );
}

export default Revision;

import React from "react";
import { UserProvider } from "./auth/UserContext"; // Adjust path as needed
import { MantineProvider } from "@mantine/core";
import Header from "./components/Navbar/Header";
import Navbar from "./components/Navbar/Navbar";
import Timer from "./components/Timer/Timer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Study from "./Pages/Study";
import Dashboard from "./Pages/Dashboard";
import VideoLecture from "./Pages/VideoLecture";
import Motivation from "./Pages/Motivation";
import Account from "./Pages/Account";
import ExploreWithAI from "./Pages/ExploreWithAI";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { NavbarProvider, useNavbar } from "./components/Navbar/NavbarContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      {/* <Router> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <NavbarProvider >
            <MantineProvider>
              <Header />

              {/* <div className={isVisible ? "container" : "container-shifted"}> */}
                <Navbar />
                {/* <div className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/video-lecture" element={<VideoLecture />} />
                    <Route
                      path="/explore-with-ai"
                      element={<ExploreWithAI />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/motivation" element={<Motivation />} />
                    <Route path="/account" element={<Account />} />
                  </Routes>
                </div>
              </div> */}
              {/* <Timer /> */}
            </MantineProvider>
          </NavbarProvider>
        </LocalizationProvider>
      {/* </Router> */}
    </UserProvider>
  );
}

export default App;

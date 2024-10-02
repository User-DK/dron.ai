import { useState } from "react";
import {
  Center,
  Tooltip,
  Button,
  UnstyledButton,
  Stack,
  rem,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconUser,
  IconLogout,
  IconSwitchHorizontal,
  IconQuote,
  IconBook,
  IconWorldSearch,
  IconPlayerPlay,
  IconAi,
  IconChevronsLeft,
  IconChevronsRight,
  IconPdf,
  IconLink,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "./NavbarContext";
import "../../App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Study from "../../Pages/Study";
import PDFlink from "../../Pages/PDF-link";
import Dashboard from "../../Pages/Dashboard";
import VideoLecture from "../../Pages/VideoLecture";
import Motivation from "../../Pages/Motivation";
import Account from "../../Pages/Account";
import ExploreWithAI from "../../Pages/ExploreWithAI";

function CombinedIcon1() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconWorldSearch style={{ marginRight: 6 }} />
      {" + "}
      <IconAi style={{ marginLeft: 3 }} />
    </div>
  );
}

function CombinedIcon2() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconPdf style={{ marginRight: 6 }} />
      {" + "}
      <IconLink style={{ marginLeft: 3 }} />
    </div>
  );
}

const navbarbuttons = [
  { icon: IconHome2, path: "/" },
  { icon: IconBook, path: "/study" },
  { icon: CombinedIcon2, path: "/pdf-link" },

  { icon: IconPlayerPlay, path: "/video-lecture" },
  { icon: CombinedIcon1, path: "/explore-with-ai" },
  { icon: IconGauge, path: "/dashboard" },
  { icon: IconQuote, path: "/motivation" },
];

function NavbarLink({ icon: Icon, path, active, setActive, index }) {
  const navigate = useNavigate();

  return (
    <Tooltip  position="right" withArrow>
      <UnstyledButton
        onClick={() => {
          setActive(index);
          navigate(path);
        }}
        className={"link"}
        data-active={active || undefined}
      >
        <Icon style={{ width: 30, height: 30 }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

function Navbar() {
  const [active, setActive] = useState(2);
  const { isVisible, toggleNavbar } = useNavbar(); // Use the context

  const links = navbarbuttons.map((link, index) => (
    <NavbarLink
      key={index}
      icon={link.icon}
      path={link.path}
      active={active === index}
      setActive={setActive}
      index={index}
    />
  ));

  return (
    <Router>
      <div>
        <Button
          onClick={toggleNavbar}
          style={{
            backgroundColor: "",
            border: "solid 1px",
            position: "fixed",
            top: "65vh",
            // left: "1rem",
            left: isVisible ? "8rem" : "1rem",
            zIndex: 1001,
          }}
        >
          {isVisible ? <IconChevronsLeft /> : <IconChevronsRight />}
        </Button>
        {isVisible && (
          <nav className="navbar">
            <div className={"navbarMain"}>
              <Stack justify="center" gap="md">
                {links}
              </Stack>
            </div>
            <div className={"navbarbottom"}>
              <Stack justify="center" gap={0}>
                <NavbarLink icon={IconUser} />
                <NavbarLink icon={IconLogout} />
              </Stack>
            </div>
          </nav>
        )}
        <div className={isVisible ? "container" : "container-shifted"}>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/study" element={<Study />} />
              <Route path="/pdf-link" element={<PDFlink />} />
              <Route path="/video-lecture" element={<VideoLecture />} />
              <Route path="/explore-with-ai" element={<ExploreWithAI />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;

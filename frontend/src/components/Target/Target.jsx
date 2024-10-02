import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

function Target({ targetList }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className="Drawer">
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {targetList.map((target, index) => (
            <ListItem key={target.id || index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "2rem", color: "#f75b1e" }}>
                      {target.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <>
      <FontAwesomeIcon
        icon={faBullseye}
        onClick={toggleDrawer(true)}
        style={{
          fontSize: "2rem",
          cursor: "pointer",
          color: "white",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "#b8b4",
          marginLeft: "10px",
        }}
      />
      <div className="Target-page">
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="right"
          sx={{ "& .MuiDrawer-paper": { backgroundColor: "#3b3b3b" } }}
        >
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}

export default Target;

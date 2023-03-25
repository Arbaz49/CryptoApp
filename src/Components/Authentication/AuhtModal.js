import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Tab, Tabs } from "@mui/material";
import TabPanel from '@mui/lab/TabPanel';
import Login from "./Login";
import Signup from "./SignUp";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuhtModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handletabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 85,
          height: 30,
          marginLeft: 15,
          backgroundColor: "gold",
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handletabChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)} style={{color:"black"}}/>
          <Tab label="Sign Up" {...a11yProps(1)} style={{color:"black"}} />
         
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Login
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sign up
      </TabPanel> */}
      {value=== 0 && <Login handleClose={handleClose} />}
      {value=== 1 && <Signup handleClose={handleClose}  />}

      
    </Box>
        </Box>
      </Modal>
    </div>
  );
}

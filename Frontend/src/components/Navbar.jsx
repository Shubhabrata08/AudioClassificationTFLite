import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route,NavLink} from 'react-router-dom'; 
import { Home } from './Home';// import your Home, Login, and Signup components
import {Login} from './Login';
import {Signup} from './Signup';
import { Dashboard } from './Dashboard';

export function Navbar() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
    <Box sx={{ width: '100%',bgcolor: 'rgba(0, 0, 0, 0.1)'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label={<NavLink to="/"><Button variant="text">Home</Button></NavLink>} />
        <Tab value="two" label={<NavLink to="/login"><Button variant="text">Login</Button></NavLink>} />
        <Tab value="three" label={<NavLink to="/signup"><Button variant="text">Signup</Button></NavLink>} />
      </Tabs>
    </Box>
    <Routes>
    <Route path="/" element = {<Home />}></Route>
    <Route path="/login" element = {<Login />}></Route>
    <Route path="/signup" element = {<Signup />}></Route>
    <Route path="/dashboard" element = {<Dashboard />}></Route>
  </Routes>
 </Router>
  );
}

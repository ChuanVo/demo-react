import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Sum from './components/Sum';
import TinhHieu from './components/TinhHieu';
import WorldClock from './components/world-clock';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import ChuyenDoiTien from './components/chuyen-doi-tien';
import RandomNumber from './components/random';
import Dashboard from './components/dashboard'

const arr = [
  {
    tenThanhPho: 'Da Nang',
    muiGio: 7
  },
  {
    tenThanhPho: 'Hong kong',
    muiGio: 8
  },
  {
    tenThanhPho: 'Dai loan',
    muiGio: 8
  }
]

function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      {/* <Clock />

      <Sum />

      <TinhHieu /> */}
      
      {/* {arr.map(function(a, index) {
    
        const {tenThanhPho, muiGio} = a
        console.log({tenThanhPho, muiGio})
        return (<WorldClock key={index} tenThanhPho={tenThanhPho} muiGio={muiGio}/>)
      })}

      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider 
          aria-label="Volume" 
          value={value} 
          onChange={handleChange} 
          color="primary"/>
        <VolumeUp />
      </Stack>


      <ChuyenDoiTien /> */}
 <ChuyenDoiTien />
      {/* <RandomNumber /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

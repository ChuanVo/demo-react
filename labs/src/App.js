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
import Gallery from './components/gallery';

import styled from 'styled-components';

import {Routes, Route, Link, useNavigate} from 'react-router-dom'

const WrapperMenu = styled('div')`
  border: 1px solid blue;
  margin-bottom: 20px;
`

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
  const navigate = useNavigate()


  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleChuyenDoiTienClick() {
    navigate('/chuyen-doi-tien')
  }
  function handleRandomClick() {
    navigate('/random')
  }
  function handleClockClick() {
    navigate('/clock')
  }
  function handleGalleryClick() {
    navigate('/gallery')
  }

  return (
    <div className="App">
      <WrapperMenu>
        {/* <Link style={{margin: '10px'}} to={'/chuyen-doi-tien'}>Chuyen doi tien</Link>
        <Link style={{margin: '10px'}} to={'/clock'}>Clock</Link>
        <Link style={{margin: '10px'}} to={'/random-number'}>RandomNumber</Link>
        <Link style={{margin: '10px'}} to={'/dashboard'}>Dashboard</Link> */}

        <Button onClick={handleChuyenDoiTienClick}>Chuyen Doi Tien</Button>
        <Button onClick={handleClockClick}>Clock</Button>
        <Button onClick={handleRandomClick}>RandomNumber</Button>
        <Button onClick={handleGalleryClick}>Gallery</Button>
      </WrapperMenu>

      <Routes>
        <Route path='/clock' element={<Clock />} />
        <Route path='/random' element={<RandomNumber />} />
        <Route path='/chuyen-doi-tien' element={<ChuyenDoiTien />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>



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
      {/* <RandomNumber /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

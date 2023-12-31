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
import BMICalculator from './components/bmi';
import FuncClock from './components/clock-lifecycle';
import VideoPlayer from './components/video-player';

import styled from 'styled-components';

import {Routes, Route, Link, useNavigate} from 'react-router-dom'

const WrapperMenu = styled('div')`
  margin-bottom: 20px;
  display: flex;
  background-color: #2E97A7;
`

const ButtonStyled = styled(Button)`
  color: white !important;
  margin: 0 10px !important;
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

const dataGallery = [{
	id: 1,
	name: "Island",
	image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
}, {
	id: 2,
	name: "Forest",
	image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
}, {
	id: 3,
	name: "Whale",
	image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
}, {
	id: 4,
	name: "Mountain",
	image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
}, {
	id: 5,
	name: "Boat",
	image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
}, {
	id: 6,
	name: "Flowers",
	image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
}, {
	id: 7,
	name: "Fire",
	image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
}, {
	id: 8,
	name: "Garden",
	image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
}, {
	id: 9,
	name: "Bridge",
	image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
}];

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
  function handleBMIClick() {
    navigate('/bmi')
  }
  function handleVideoPlayerClick() {
    navigate('/video-player')
  }

  return (
    <div className="App">
      {/* <FuncClock /> */}
      <WrapperMenu>
        <ButtonStyled onClick={handleChuyenDoiTienClick}>Chuyen Doi Tien</ButtonStyled>
        <ButtonStyled onClick={handleClockClick}>Clock</ButtonStyled>
        <ButtonStyled onClick={handleRandomClick}>RandomNumber</ButtonStyled>
        <ButtonStyled onClick={handleGalleryClick}>Gallery</ButtonStyled>
        <ButtonStyled onClick={handleBMIClick}>BMI</ButtonStyled>
        <ButtonStyled onClick={handleVideoPlayerClick}>Video player</ButtonStyled>
      </WrapperMenu>

      <Routes>
        <Route path='/clock' element={<Clock />} />
        <Route path='/random' element={<RandomNumber />} />
        <Route path='/chuyen-doi-tien' element={<ChuyenDoiTien />} />
        <Route path='/gallery' element={<Gallery dataImage={dataGallery}/>} />
        <Route path='/bmi' element={<BMICalculator />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/video-player' element={<VideoPlayer />} />
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

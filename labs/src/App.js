import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Sum from './components/Sum';
import TinhHieu from './components/TinhHieu';
import WorldClock from './components/world-clock';

function App() {
  return (
    <div className="App">
      {/* <Clock />

      <Sum />

      <TinhHieu /> */}
      <img src='ajhasd'/>
      <WorldClock tenThanhPho={'Da Nag'} muiGio={7}/>
      <WorldClock tenThanhPho={'Hong Kong'} muiGio={8}/>
    </div>
  );
}

export default App;

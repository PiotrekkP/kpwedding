import WeddingPlan from './WeddingPlan';
import './App.css';
import AdditionalEvents from './AdditionalEvents';
import GuestsTransport from './GuestsTransport';
import Home from './Home';
import MapaDojazdu from './MapaDojazdu';
import More from './More';
import AppearanceConfirmation from './AppearanceConfirmation';
import Thanks from './Thanks';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/plan-wesela" element={<WeddingPlan/>}></Route>
            <Route path="/atrakcje" element={<AdditionalEvents/>}></Route>
            <Route path="/transport" element={<GuestsTransport/>}></Route>
            <Route path="/mapy" element={<MapaDojazdu/>}></Route>
            <Route path="/wiecej" element={<More/>}></Route>
            <Route path="/potwierdzenie" element={<AppearanceConfirmation/>}></Route>
            <Route path="/podziekowanie" element={<Thanks/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

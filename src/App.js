import WeddingPlan from './WeddingPlan';
import './App.css';
import Test from './Test';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Test/>}></Route>
            <Route path="/planwesela" element={<WeddingPlan/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

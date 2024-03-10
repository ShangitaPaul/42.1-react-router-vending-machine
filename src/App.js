
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/Snack1" element={<Snack1 />} />
          <Route path="/Snack2" element={<Snack2 />} />
          <Route path="/Snack3" element={<Snack3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
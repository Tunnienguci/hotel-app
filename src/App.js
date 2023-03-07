import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Pages
import Homepage from './Pages/homepage';
import Hotel from './Pages/hotel';
import Detail from './Pages/detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

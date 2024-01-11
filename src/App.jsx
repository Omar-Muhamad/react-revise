import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Containers/Home';

function App() {
  return (
    <Router>
      {/* Navbar here */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

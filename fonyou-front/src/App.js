import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Add from './charactrs/Add';
import Edit from './charactrs/Edit';
import View from './charactrs/View';
import img from './assets/img.jpg'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <img src={img} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit/>} />
        <Route exact path="/view/:id" element={<View/>} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;

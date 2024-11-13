import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Orders from './components/Orders';
import Login from './components/Login';
import Signup from './components/Signup';
import Forbidden from './components/Forbidden'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forbidden" element={<Forbidden/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

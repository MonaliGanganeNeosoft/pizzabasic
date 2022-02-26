import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navb from "./components/Navb"
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/login';
function App() {
  return (
    
    <div className='App'>
    <Router>
      <Navb />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>       
      </Routes>


    </Router>

    </div>
    
  );
}

export default App;

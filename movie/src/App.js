import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddMovie from './Components/AddMovie';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddMovie data={{movieName:"",
actor:"",
actress:"",
director:"",
releasedYear:"",
camera:"",
producer:"",
language:""
}} method="post"/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;

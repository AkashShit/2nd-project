import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './component/common/Navbar'
import Menu from './pages/Menu';
import Test from './pages/Test';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import NavBar2 from './component/common/NavBar2';
function App() {
  return (
    <div>
    <Router>
      <NavBar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/test/:id/:name'element={<Test/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './layout/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import ViewUser from './Components/ViewUser';
function App() {
  return(
    <div className='App'>
      <Router>
      <NavBar/>
        <Routes>
<Route path='/' element={<Home/>}/>
<Route path="/adduser" element={<AddUser/>}/>
<Route path='/edituser/:id' element={<EditUser/>}/>
<Route path='/viewuser/:id' element={<ViewUser/>}/>
        </Routes>
      </Router>

 
 
    </div>
  )
}

export default App

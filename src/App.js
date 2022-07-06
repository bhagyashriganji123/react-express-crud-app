import 'bootstrap/dist/css/bootstrap.min.css';
import AddUsers from './components/AddUsers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import EditUser from './components/EditUser';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addUser' element={<AddUsers/>}/>
            <Route path='/editUser/:id' element={<EditUser/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

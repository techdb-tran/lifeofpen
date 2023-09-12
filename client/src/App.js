import { BrowserRouter, Routes,Route } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Write from './pages/write/Write';
import SinglePost from './singlePost/SinglePost';
import Settings from './pages/settings/Settings';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <>Hello Wolrd</>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<TopBar/>}>
    //     <Route index element={<Home/>}/>
    //     <Route path='/about' element={<Sidebar/>}/>
    //     <Route path='/contact' element={<Sidebar/>}/>
    //     <Route path='/write' element={user?<Write/>:<Register/>}/>
    //     <Route path='/login' element={user?<Home/>:<Login/>}/>
    //     <Route path='/register' element={user?<Home/>:<Register/>}/>
    //     <Route path='/post/:postId' element={<SinglePost/>}/>
    //     <Route path='/settings' element={user?<Settings/>:<Register/>}/>
    //     </Route> 
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

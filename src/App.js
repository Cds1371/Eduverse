import logo from './logo.svg';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Explore from './components/Explore';
import PeerConnection from './components/PeerConnection';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import UserRegister from './components/UserRegister';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<UserRegister />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/explore' element={<Explore />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/peer-connection' element={<PeerConnection />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

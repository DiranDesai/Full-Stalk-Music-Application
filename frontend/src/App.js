import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import NewRealeses from './components/NewRealeses';
import DownBar from './components/DownBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import SinglePageSong from './pages/SinglePageSong';
import UploadSongPage from './pages/UploadSongPage';
import useAuth from './hooks/useAuth';
import { isAuthPage } from './utils/main';

function App() {
  const {token} = useAuth()


  console.log(token)

  return (
    <>
      <Router>
        {!isAuthPage() && <SideBar />}
        <main style={{marginLeft: `${isAuthPage() ? '0px' : '200px'}`}}>
          {!isAuthPage() && <NavBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs/1" element={<SinglePageSong />} />
            <Route path="/upload" element={<UploadSongPage />} />
          </Routes>
        </main>
        {/* <DownBar /> */}
      </Router>
    </>
  );
}

export default App;

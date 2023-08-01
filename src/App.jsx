import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/home";
import Stats from "./pages/Stats";
import Songs from "./pages/Favourites/Songs";
import Artists from "./pages/Favourites/Artists";
import Albums from "./pages/Favourites/Albums";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stats" element={<Stats />}/>
        <Route path="/Favourites/Songs" element={<Songs />} />
        <Route path="/Favourites/Artists" element={<Artists />} />
        <Route path="/Favourites/Albums" element={<Albums />}/>
      </Routes>
    </div>
  );
};

export default App

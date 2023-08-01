import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/home";
import Stats from "./pages/Stats";
import Songs from "./pages/Songs";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Stats" element={<Stats />}/>
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Albums" element={<Albums />}/>
      </Routes>
    </div>
  );
};

export default App

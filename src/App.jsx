import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Stats from "./pages/Stats";
import Songs from "./pages/Songs";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Settings from "./pages/Settings";
import PageLayout from "./PageLayout";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App

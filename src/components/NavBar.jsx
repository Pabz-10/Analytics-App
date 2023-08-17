import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar(){
    return (
        <nav className="navbar">
            <h1>Your Spotify Analytics</h1>
                <SearchBar />
                <div className="navbar--items">
                <ul className="navbar--list"> 
                    <div className="navbar--general">
                        <li>General</li>
                        <li><Link to="/">Home</Link ></li>
                        <li><Link to="/stats">Stats</Link ></li>
                    </div>

                    <div className="navbar--favs">
                        <li>Favourites</li>
                        <li><Link to="/songs">Favourite Songs</Link ></li>
                        <li><Link to="/artists">Favourite Artists</Link ></li>
                        <li><Link to="/albums">Favourite Albums</Link ></li>
                    </div> 

                    <div className="navbar--personal">
                        <li>Personalization</li>
                        <li><Link to="/settings">Settings</Link ></li>
                    </div>

                </ul>
                </div>
        </nav>
    );
};
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar(){
    return (
        <nav className="navbar">
            <h1>Your Spotify Analytics</h1>
                <SearchBar />
                <div className="navbar--items">
                    <ul className="list--items">
                        <div className="navbar--general">
                            <li className="navbar--titles">General</li>
                            <li><Link to="/">Home</Link ></li>
                            <li><Link to="/stats">Stats</Link ></li>
                        </div>  

                        <div className="navbar--favs">
                            <li className="navbar--titles">Favourites</li>
                            <li><Link to="/songs">Favourite Songs</Link ></li>
                            <li><Link to="/artists">Favourite Artists</Link ></li>
                            <li><Link to="/albums">Favourite Albums</Link ></li>
                        </div>

                        <div className="navbar--personal">
                            <li className="navbar--titles">Personalization</li>
                            <li><Link to="/settings">Settings</Link ></li>
                        </div>
                    </ul>
                </div>
        </nav>
    );
};
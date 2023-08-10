import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="NavBar">
            <h1>Your Spotify Analytics</h1>
            <ul>

                <li className="NavBar--titles">General</li>
                <li><Link to="/">Home</Link ></li>
                <li><Link to="/stats">Stats</Link ></li>
                
                <li className="NavBar--titles">Favourites</li>
                <li><Link to="/songs">Favourite Songs</Link ></li>
                <li><Link to="/artists">Favourite Artists</Link ></li>
                <li><Link to="/albums">Favourite Albums</Link ></li>

                <li className="NavBar--titles">Personalization</li>
                <li><Link to="/settings">Settings</Link ></li>

            </ul>
        </nav>
    );
};
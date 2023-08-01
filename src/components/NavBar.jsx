import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="NavBar">
            <a> href="/"Your Spotify Analytics</a>
            <ul>

                <li className="NavBar--titles">General</li>
                <li><a>Home</a></li>
                <li><a>Stats</a></li>
                
                <li className="NavBar--titles">Favourites</li>
                <li><a>Favourite Songs</a></li>
                <li><a>Favourite Artists</a></li>
                <li><a>Favourite Albums</a></li>

                <li className="NavBar--titles">Settings</li>
                <li><a>Logout</a></li>

            </ul>
        </nav>
    );
};
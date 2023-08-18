import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar(){
    return (
        <div className="navbar">
            <ul className="navbar--list"> 
            <div className="navbar--items">

                <h1>Your Spotify Analytics</h1>
                <SearchBar />
                <li className="navbar--title"><h1>General</h1></li>  
                <li><Link to="/">Home</Link ></li>
                <li><Link to="/stats">Stats</Link ></li>
    
                <li className="navbar--title"><h1>Favourites</h1></li>  
                <li><Link to="/songs">Favourite Songs</Link ></li>
                <li><Link to="/artists">Favourite Artists</Link ></li>
                <li><Link to="/albums">Favourite Albums</Link ></li>
                 

                <li className="navbar--title"><h1>Personalization</h1></li>
                <li><Link to="/settings">Settings</Link ></li>
            </div> 
            </ul>
        </div>
    );
};
import {useState} from "react"

export default function SearchBar(){
    
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div className="searchbar">
            <input 
                type="text"
                placeholder="Search here"
                className="searchbar--input"
                onChange={event => setSearchTerm(event.target.value)} 
                // once user types this event happens and takes the current value of the input field and sets the value for searchTerm to the searched value
            />
        </div>
    );
}
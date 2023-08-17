import {useState} from "react"

export default function SearchBar(){
    
    /* const [input, setInput] = useState("") */
    
    return (
        <div className="searchbar">
            <input 
                type="text"
                placeholder="Search here"
                className="searchbar--input"
                /* onChange={handlechange}
                value={searchInput} */
            />
        </div>
    );
}
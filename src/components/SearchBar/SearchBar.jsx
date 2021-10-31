import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import styles from "./SearchBar.module.scss";



const SearchBar = () => {
    const [currentInput, setCurrentInput] = useState("");
    
    const { setSearch } = useContext(SearchContext);

    const handleChange = (event) => {
        setCurrentInput(event.target.value);
    };

    const handleClick = (event) => {
       
        setSearch(currentInput); 

        setCurrentInput(""); 
    };

    return (
        <div className={styles.SearchBar}>
            <input value={currentInput} onChange={handleChange} type="text" />
            <button className={styles.button} onClick={handleClick} type="submit"><i className="fa fa-search"></i></button>
        </div>
    );
};


export default SearchBar;
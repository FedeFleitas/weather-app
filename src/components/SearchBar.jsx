import React, { useState } from "react";
import styles from './SearchBar.module.css'
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div  >
      <form className={styles.searchBar} onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')
      }}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search a city..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button className={styles.button} type="submit" value="Agregar" ><BiSearch /></button>
      </form>
    </div>
  );
}

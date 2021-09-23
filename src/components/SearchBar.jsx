import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
      className="form"
    >
      <input
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search"
      />
      <input type="submit" value="Add" className="sub" />
    </form>
  );
}

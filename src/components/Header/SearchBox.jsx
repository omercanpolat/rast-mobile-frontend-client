import { FaFilter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import "../../scss/Searchbox.scss";

const SearchBox = ({ getLinks, onSearch }) => {
  // const [editItem, setEditItem] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [link, setLink] = useState("");
  const [link_name, setLinkName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        setDescription("");
        setLink("");
        setLinkName("");
        onSearch(searchTerm);
  };



  console.log( link, link_name, description);

  return (
    <form
      onSubmit={handleSubmit}
      className="form  d-flex justify-content-between"
    >
      <div className="search-container">
        <input
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Objects..."
          className="search-box"
        />

        <button
          // type="button"
          className="search-button"
          // data-bs-toggle="modal"
          // data-bs-target="#edit-link"
          // aria-labelledby="exampleModalLabel"
          // aria-hidden="true"
          // // onClick={() => setEditItem(item)}
        >
          <FiSearch />
        </button>
      </div>

      <div className="fafilter">
        <FaFilter
          type="button"

          // onClick={() => deleteLink(id)}
        />
      </div>
    </form>
  );
};

export default SearchBox;

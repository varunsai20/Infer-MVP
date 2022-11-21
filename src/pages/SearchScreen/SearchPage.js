import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchPage.css";
import "./SearchData.css";
import Navbar from "react-bootstrap/Navbar";
// import Searchbar from "../../components/Searchbar"
import "../../components/Searchbar.css";
import SearchData from "./searchData/searchData";

const SearchScreen = ({ searchTerm, setSearch, googleData }) => {
  const history = useHistory("");
  
  console.log(googleData);
  useEffect(() => {
    if (searchTerm === "") {
      history.push("/home");
    }
    //eslint-disable-next-line
  }, [searchTerm]);
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term);
    }
  };
  return (
    <>
      <Navbar className="navbar-search" bg="light" expand="lg">
        <p id="Library">Library Search</p>
        <form className="d-flex" id="Search" /*onSubmit={handleSubmit}*/>
          <input
            placeholder={searchTerm}
            type="text"
            value={term}
            className="Search"
            aria-label="Search"
            onChange={(event) => setTerm(event.target.value)}
          />
        </form>
      </Navbar>
      <div className="SearchPage">
        <SearchData googleData={googleData} searchTerm={searchTerm}/>
      </div>
    </>
  );
};
export default SearchScreen;

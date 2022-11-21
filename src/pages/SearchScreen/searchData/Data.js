import React from "react";
import { Link } from "react-router-dom";
const Data = ({ data ,searchTerm}) => {
  return (
    <>
    
    <div className="SearcContent">
      <div className="note">
        <div className="search-title-header">
          <a href="{data.htmlFormattedUrl}">{data.title}</a>
          {/* <a href="" id="save-tag">SavePost</a> */}
        </div>
        <div className="TagFrame">
          <p id="Tags">Tags : </p>
          <p className="Tags">{searchTerm}</p>
        </div>
        <p>{data.snippet}</p>
      </div>
    </div>
    </>
  );
};

export default Data;


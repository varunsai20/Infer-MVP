import "./addNote.css";
import React,{useState} from "react";
import { useHistory } from "react-router-dom";
export default function AddNote() {
  const history=useHistory('')
  function handleSubmit(e){
    e.preventDefault();
    history.push('/saved')
  }
  return (
    <div className="body">
    <div className="add-note-popup">
      <h3 className="header-title">Add a Note</h3>
      <h3 className="note-title">Start editing to see some magic happen!</h3>
      <div>
        <input
          type="text"
          className="input-box"
          placeholder="start typing here"
        />
      </div>
      <h4>Rate this article </h4>
      <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="5 star" />
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="4 star" />
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="3 star" />
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="2 star" />
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="1 star" />
      </div>
      <div className="buttons">
        <button className="save-button">Save Changes</button>
        <button className="cancel-button" onClick={handleSubmit}>Cancel</button>
      </div>
    </div>
    </div>
  );
}

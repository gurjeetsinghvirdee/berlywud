import React, { useState } from 'react';
import './SearchBox.css';
import { BiSearchAlt } from "react-icons/bi"; 
import { useHistory } from 'react-router-dom';

export default function SearchBox() {
  const history = useHistory();
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          placeholder
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="primary" type="submit">
         <BiSearchAlt/>
        </button>
      </div>
    </form>
  );
}
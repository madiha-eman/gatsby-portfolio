import React from 'react';
import { Link } from 'gatsby';
// import avatar1 from '../assets/images/avatar1.jpg';


export default function Footer({ title, heading, avatar1 }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="124px" src={avatar1} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}

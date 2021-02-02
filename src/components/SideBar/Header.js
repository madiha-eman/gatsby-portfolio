import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar1 }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar1} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
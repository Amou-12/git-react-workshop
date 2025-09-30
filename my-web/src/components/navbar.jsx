import React from "react";
import "../styles/navbar.css"

export default function Navbar() {
  const scrollTosection = (id) => {documents.getElementId(id).scrollIntoView({behavior:"smooth"})};
  return (
    <>
  

      <nav className="navbar">
        <div
        className="nav-logo"
        onClick={()=>documents.getElementById("home").scrollInoView({behavior:smooth})}

        >
          Amou Malual
        </div>

        <ul className= "nav-links">
          <li onClick={()=> scrollTosection("projects")}>projects</li>
          <li onClick={()=> scrollTosection("contact")}>contact</li>
          <li onClick={() => window.open("/resume.pdf","_blank" )}>Resume</li>
        </ul>
      </nav>

    </>
  );
}

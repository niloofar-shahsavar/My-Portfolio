import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/LuxbiteProject.css';
import project1 from "../assets/luxbite.png";

function Luxbite() {
  return (
    <div className='LuxbitePage'>
      <h1>Luxbite Project</h1>
      Här kommer en länk till Figma för luxbite projektet:
      <a href="https://www.figma.com/proto/0WcU52ESl9ufsiJr8cbURJ/VG-LuxeBite?node-id=0-1&t=yJ5YrCW6cVj5nVBw-1" target="_blank" rel="noopener noreferrer">Luxbite</a>
      <img className="luxbite-img" src={project1} alt="Luxbite Project" />
    </div>
  );
}

export default Luxbite;
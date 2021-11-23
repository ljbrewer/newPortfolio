import React from 'react';

import '../assets/css/style.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project1"
          onClick={() => handlePageChange('Project1')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project1' ? 'nav-link active' : 'nav-link'}
        >
          Home Inventory Database
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project2"
          onClick={() => handlePageChange('Project2')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project2' ? 'nav-link active' : 'nav-link'}
        >
          Animal Adoptions
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project3"
          onClick={() => handlePageChange('Project3')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project3' ? 'nav-link active' : 'nav-link'}
        >
          Day Planner
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project4"
          onClick={() => handlePageChange('Project4')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project4' ? 'nav-link active' : 'nav-link'}
        >
          Password Generator
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project5"
          onClick={() => handlePageChange('Project5')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project5' ? 'nav-link active' : 'nav-link'}
        >
          Project TBD
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

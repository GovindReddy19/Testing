import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons';
function navbar () {
   return (
      <>
        <div className="navbar">
            <div className="navbar-container container">
               <Link to='/' className="navbar-logo">
                  Govind          
               </Link>
               <div className="menu-icon">

               </div>
            </div>
        </div> 
      </>
   );
}

export default navbar;

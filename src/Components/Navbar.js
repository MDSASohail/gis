import React from 'react';
import { Link } from 'react-router-dom';  // Correct import statement

const Navbar = () => {
  return (
    <>
      <div className="navHead">
        <Link to={'/member'} className='none'>
          <p className="textt marginn">Members</p>
        </Link>
        <Link to={'/'} className='none'>

        
        <p className="textt marginn">Project</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;

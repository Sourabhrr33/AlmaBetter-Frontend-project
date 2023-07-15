
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Pages/images/logo.png';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleNavItemClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className='shadow p-2 mb-3 bg-white rounded'>
      <nav className='navbar navbar-expand-lg navbar-light p-0 m-0'>
        <div className='container-fluid'>
          <div className='navbar-brand d-flex align-items-center' style={{ color: '#07588a', fontSize: '30px', fontWeight: '600' }}>
            <div className='me-3 mb-2'>
              <NavLink to='/'>
                <img className='w-50' src={Logo} alt='AlmaBtter' />
              </NavLink>
            </div>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            onClick={handleMobileMenuToggle}
            style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }}
          >
            <span className='navbar-toggler-icon'></span>
          
          </button>


          <div className='Navbar'>

        
          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`}>
            <ul className='navbar-nav mb-2 ms-5'>
              <li className='nav-item'>
                {/* this link will show the Home page */}
                <Link to='/' className='link-primary me-4' style={{ textDecoration: 'none', color: '#07588a', fontSize: '20px' }} onClick={handleNavItemClick}>
                  Resume Templates
                </Link>
              </li>
              <li className='nav-item'>
                {/* this link will show the MyResume page displaying the preview of the resume created by the user. */}
                <Link to='/myresume' className='link-primary me-4' style={{ textDecoration: 'none', color: '#07588a', fontSize: '20px' }} onClick={handleNavItemClick}>
                  My Resume
                </Link>
              </li>
              <li className='nav-item'>
                {/* this link will show the About Us page. */}
                <Link to='/about' className='link-primary' style={{ textDecoration: 'none', color: '#07588a', fontSize: '20px' }} onClick={handleNavItemClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;





















// import React from 'react'
// import {Link,  NavLink} from 'react-router-dom'
// import Logo from "../Pages/images/logo.png"



// function Navbar() {
//   return (

//     <div className='shadow p-2 mb-3 bg-white rounded"'>
//       <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 " >
//         <div className="container-fluid  ">
//           <div className="navbar-brand d-flex align-items-center" style={{ color: '#07588a', fontSize: '30px', fontWeight: "600" }}>

//           <div className='me-3 mb-2'>
//            <NavLink to="/">
//               <img className='w-50' src={Logo} alt="AlmaBtter" />

//            </NavLink>
//               </div>
            
//           </div>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse  " id="navbarSupportedContent">
//             <div className='flex-grow-1'></div>
//             <div className="navbar-nav mb-2 ms-5 ">
//               <li className="nav-item">
//                 {/* /*this link will show the Home page */}
//                 <Link to='/' className="  link-primary me-4 " style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}}>Resume Templates</Link> 
//               </li>
//               <li className="nav-item">
//                 {/* this link will show the MyResume page displaying the preview of the resume created by the user. */}
//                  <Link to='/myresume' className="  link-primary me-4 " style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}} >My Resume</Link>
//               </li>
//               <li className="nav-item">
//                 {/* this link will show the About Us page. */}
//                 <Link to='/about' className="  link-primary " style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}}>About Us</Link> 

              
//               </li>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

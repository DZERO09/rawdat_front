import React from 'react'
import kids_icone from './../../asset/navbar/boy_1.png'
import parent_icone from './../../asset/navbar/family.png'
import avtivity_icone from './../../asset/navbar/crayons_1.png'
import guadrian_icone from './../../asset/navbar/nanny.png'
import kindergarten_icone from './../../asset/navbar/kindergarten_2.png'

import { Link, useNavigate, useLocation } from 'react-router-dom'
import PropTypes from "prop-types"
import '../layout/css/navbarCss.css'
function Navbar({ title }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if(route === location.pathname){
      return true ;
    }
  }
  return (
    <header>
    <nav className='navbar'>
      <ul className='navbar-container'>
        <li><Link className='navbar-link-item' to='/'>{title}</Link></li>
        <div className='navbar-items'>


            <li className='navbar-itmes-container' onClick={() => navigate('/activities')}>

              <img src={avtivity_icone}></img>
             
              <p className={
                  pathMatchRoute('/activities') ? 'pActive' : '' 
              }>
              Avtivités</p>
            </li>
          


         
            <li className='navbar-itmes-container' onClick={() => navigate('/kids')}>

              <img src={kids_icone}></img>
            
              <p className={
                  pathMatchRoute('/kids') ? 'pActive' : '' 
              }>
              Enfants</p>
            </li>
        



            <li className='navbar-itmes-container' onClick={() => navigate('/parent')}>

              <img src={parent_icone}></img>
            
              <p className={
                  pathMatchRoute('/parent') ? 'pActive' : '' 
              }>
              Parents</p>
            </li>
        


         
            <li className='navbar-itmes-container' onClick={() => navigate('/guardian')}>

              <img src={guadrian_icone}></img>
             
              <p className={
                  pathMatchRoute('/guardian') ? 'pActive' : '' 
              }>
              Guardians</p> 

            </li>
        

         
            <li className='navbar-itmes-container' onClick={() => navigate('/kindergarten')}>

              <img src={kindergarten_icone}></img>
              <p className={
                  pathMatchRoute('/kindergarten') ? 'pActive' : '' 
              }>
              profile</p> 


            </li>
         

          <li><Link className='navbar-link-item' to='/setting'>Setting</Link></li>
        </div>
      </ul>
    </nav>
    </header>
  )
}
Navbar.defaultProps = {
  title: "New"
}

Navbar.prototype = {
  title: PropTypes.string,
}
export default
  Navbar
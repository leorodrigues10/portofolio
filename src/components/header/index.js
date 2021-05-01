import './header.css';
import logo from '../../assets/img/logo.png'
import { useState } from 'react';
import Nav from '../nav'
function Header () {

  const [showNav, setShowNav] = useState(false);

  

  return (
    <header>
      <div className="header-content">
      <img className="logo" src={logo} alt="logo"/>
      <Nav name="full"/>

      <Nav name="resp" showNav={showNav}/>

      <i className="fas fa-stream fa-lg dropdown" onClick={() => {
        console.log(showNav)
        setShowNav(!showNav)}}></i>

      </div>
    </header>
  )
}

export default Header
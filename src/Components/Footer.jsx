import React from 'react'
import styles from "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='digitalhouse'>
        <img src='../img/DH.png' alt='DH-logo' className='digitalimg'/>
      <div className='redes'>
          <img src="../img/ico-facebook.png" alt="FB-logo" className="icon"/>
          <img src="../img/ico-instagram.png" alt="IG-logo" className="icon"/>
          <img src="../img/ico-tiktok.png" alt="TK-logo" className="icon"/>
          <img src="../img/ico-whatsapp.png" alt="WSP-logo" className="icon"/>
      </div>
      </div>  
      <div className="icons">Copyright &copy; Mauro Tapia</div>
    </footer>
  )
}

export default Footer

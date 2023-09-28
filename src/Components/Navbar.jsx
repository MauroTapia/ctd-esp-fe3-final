import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Barra.css";
import { useDocStates } from '../Context/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useDocStates(); 

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' }); // Activa la acción SWITCH_THEME del contexto
  };

  const bodytheme = `body ${state.theme}`

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <Link to="/" className="site-title"><p>DH Odonto</p></Link>
      <div className='nav-bar'>
          <ul className='ulWithList'> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/favs">Favs</Link></li>
          </ul>
        <button onClick={toggleTheme} id='btn'>{ !state.theme ?  <img src="../img/luna.png" alt=""/> : <img src='../img/sol.png' alt='' />}</button>
      </div>
      
    </nav>
  )
}

export default Navbar
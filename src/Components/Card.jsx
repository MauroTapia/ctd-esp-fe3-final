import "../styles/Cards.css"
import { useDocStates } from "../Context/Context";
import { Link } from "react-router-dom";


const Card = ({ dentista }) => {

  const {state, dispatch} = useDocStates();
  const findOdontologo = state.favs.find(fav => fav.id == dentista.id);


  const addFav = ()=>{
    if(findOdontologo){
      dispatch({type: 'DELETE_FAV', payload: findOdontologo})
    } else {
      dispatch({type: 'ADD_FAV', payload: dentista})
    }
  }

  return (
    <div className="card">
        <div className="card-doc">
            <img src="../img/doctor.jpg" alt=""/>
            <h2>{dentista.name}</h2>
            <h3>{dentista.username}</h3>
            <Link to={'/detail/' + dentista.id}>
            <div className="detallesDentista">
              <p>Detalles de {dentista.name}</p>
            </div>
            </Link>
          <button onClick={addFav} className="favButton">{findOdontologo ? <img className="icon" src="../img/stair.png" alt="fav"/> : <img className="icon" src="../img/unstair.png" alt="fav"/>}</button>
        </div>  
    </div>
  );
};

export default Card;

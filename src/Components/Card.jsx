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
          <Link to={'/detail/' + dentista.id}>
            <img src="../img/doctor.jpg" alt=""/>
            <h2>{dentista.name}</h2>
            <h3>{dentista.username}</h3>
          </Link>
          <button onClick={addFav} className="favButton">⭐</button>
        </div>  
    </div>
  );
};

export default Card;

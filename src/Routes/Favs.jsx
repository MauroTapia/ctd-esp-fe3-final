import React from "react";
import Card from "../Components/Card";
import { useDocStates } from "../Context/Context";
import "../styles/Favs.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDocStates();
  
  return (
    <>
      <div className="favs">
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map(fav => <Card dentista={fav} key={fav.id}/>)}
        </div>
      </div>
    </>
  );
};

export default Favs;

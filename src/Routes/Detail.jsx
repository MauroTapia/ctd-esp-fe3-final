import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDocStates } from '../Context/Context';
import "../styles/Detail.css"


const Detail = () => {
  const {state, dispatch} = useDocStates()
  const params = useParams();
  const {name,email,phone,website} = state.dentista;

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTA', payload: res.data}))
}, [])


  return (
    <>
    <div className='detail'>
      <div>
        <h1>Detail Dentist id </h1>
        <h1>Nombre: {name}</h1>
        <h3>Email: {email}</h3>
        <h3>Telefono: {phone}</h3>
        <h3>Website: {website}</h3>
        
          <img src="/img/doctor.jpg" alt="" className="card-image"/>
        </div>
        
    </div>
    </>
  )
}

export default Detail
import React from 'react'
import "../styles/Cards.css"
import { useDocStates } from '../Context/Context'
import Card from '../Components/Card'


const Home = () => {
    const {state} = useDocStates();
    // console.log(dentistas)
  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistas.map(dentista => (<Card dentista={dentista} key={dentista.id}/>))}
    </div>
    </main>
  )
}

export default Home
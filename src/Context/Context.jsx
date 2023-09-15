import axios from "axios";
import { useContext, createContext, useEffect, useReducer} from "react";

const DoctorStates = createContext();

const reducer = (state, action) => {
  switch(action.type){
      case 'GET_DENTISTAS':
          return {...state, dentistas: action.payload}
      case 'GET_DENTISTA':
          return {...state, dentista: action.payload}
          case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)}
        case 'SWITCH_THEME':
            return  {...state, theme: state.theme === '' ? 'dark' : '' }; // Cambia el tema entre "light" y "dark"
        default:
            throw new Error()
  }
}

  const localFavs = JSON.parse(localStorage.getItem('favs'));
  const initialFavState = localFavs ? localFavs : [];

  const initialState = {
    dentistas: [],
    dentista: {},
    favs: initialFavState,
    theme: ''
  }

  const Context = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTAS', payload: res.data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs]);

  return(
    <DoctorStates.Provider value={{state, dispatch}}>
        {children}
    </DoctorStates.Provider> 
  )
}

export default Context

export const useDocStates = () => useContext(DoctorStates)
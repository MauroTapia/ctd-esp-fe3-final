import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Route, Routes } from 'react-router-dom';
import { useDocStates } from "./Context/Context";



function App() {

  const { state } = useDocStates(); 
  const bodyClassName = `body ${state.theme}`

  return (
    <html className= {bodyClassName}>
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
    </html>
  );
}

export default App;

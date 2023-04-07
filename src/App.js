import './App.css';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import {BrowserRouter,Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>
  
       <BrowserRouter>

       <Routes>

       <Route exact path='/' element={<Home/>}/>
       <Route path='/signup' element={<Signup/>}/>

       </Routes>
        
        </BrowserRouter>
       
      </h1>
    </div>
  );
}

export default App;

import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Header/>
      < Routes>
      <Route  path="/login" element={<Login/>}/>
      
      <Route path="/checkout" element={<Checkout/>}/>
      
      <Route path="/" element={<Home/>}/>
          </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
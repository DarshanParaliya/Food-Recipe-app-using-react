import './App.css';
import Mainpage from "./components/Mainpage"
import Mealinfo from "./components/Mealinfo"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   {/* <Mainpage/> */}
   <Routes>
    <Route path='/' element={<Mainpage/>} />
    <Route path='/:mealid' element={<Mealinfo/>} />
   </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Mainpage from "./components/Mainpage"
import Mealinfo from "./components/Mealinfo"
import { Routes, Route } from 'react-router-dom';
import Todolist from './components/Todolist';

function App() {
  return (
   
    <div className="App">
   {/* <Mainpage/> */}
   <Routes>
    <Route path='/' element={<Mainpage/>} />
    <Route path='/:mealid' element={<Mealinfo/>} />
      <Route path='/todo' element={<Todolist/>} />

   </Routes>
    </div>
    
  );
}

export default App;

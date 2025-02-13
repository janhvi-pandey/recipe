
import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home';
import Recipes from './components/Recipes';

function App() {
  return (
<>
<Router>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/recipe" element={<Recipes/>} />

</Routes>
</Router>
</>      
  );
}

export default App;

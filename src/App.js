
import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home';
import Recipes from './components/Recipes';
import IndividualRecipe from './components/IndividualRecipe';

function App() {
  return (
<>
<Router>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/recipe" element={<Recipes/>} />
<Route path="/recipes/:id" element={<IndividualRecipe />} />

</Routes>
</Router>
</>      
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Utensils, Users, Clock, Timer, TrendingUp, Star } from "lucide-react";


const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-amber-400">
        Loading... Please Wait 😊
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-start p-8 md:p-16 h-[200px] md:h-[355px] bg-[url('/images/image3.png')] bg-cover bg-center bg-no-repeat">
      <div className="inset-0 bg-white  bg-opacity-50"></div>
          <h1 className="text-5xl font-bold text-black">{recipe.name}</h1>
        
      </div>

      {/* Recipe Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
      
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img className="rounded-3xl w-[400px] h-[400px] shadow-lg" src={recipe.image} alt={recipe.name} />
          <div className="space-y-4 text-lg">
            <h2 className="text-3xl font-semibold text-black">Let's Cook</h2>
            <p className="text-gray-700">
              Explore the taste of {recipe.cuisine} cuisine with this {recipe.difficulty} level recipe.
              Perfect for {recipe.servings} servings!
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-amber-500  hover:bg-amber-600 transition text-white font-semibold rounded-lg">
                Prep: {recipe.prepTimeMinutes} min
              </span>
              <span className="px-4 py-2 bg-amber-500  hover:bg-amber-600 transition text-white font-semibold rounded-lg">
                Cook: {recipe.cookTimeMinutes} min
              </span>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-amber-500">Ingredients</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-lg">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="p-3 bg-gray-200 rounded-lg shadow-md">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-amber-500">Instructions</h2>
          <ul className="mt-4 space-y-3 text-lg">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="p-3 bg-gray-200 rounded-lg shadow-md">
                <span className="font-semibold text-amber-500">Step {index + 1}: </span>
                {instruction}
              </li>
            ))}
          </ul>
        </div>

        

{/* Recipe Info Cards */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
  {[
    { label: "Cuisine", value: recipe.cuisine, icon: <Utensils size={28} /> },
    { label: "Servings", value: recipe.servings, icon: <Users size={28} /> },
    { label: "Prep Time", value: `${recipe.prepTimeMinutes} min`, icon: <Clock size={28} /> },
    { label: "Cook Time", value: `${recipe.cookTimeMinutes} min`, icon: <Timer size={28} /> },
    { label: "Difficulty", value: recipe.difficulty, icon: <TrendingUp size={28} /> },
    { label: "Rating", value: recipe.rating, icon: <Star size={28} /> },
  ].map((item, index) => (
    <div key={index} className="flex items-center p-4 bg-gray-200 rounded-lg shadow-md">
      {/* Icon Section */}
      <div className="w-12 h-12 flex items-center justify-center bg-amber-500 text-white rounded-lg">
        {item.icon}
      </div>
      
      {/* Text Section */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-black">{item.label}</h3>
        <p className="text-xl">{item.value}</p>
      </div>
    </div>
  ))}
</div>



        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition">
            Save to Favorites ❤️
          </button>
          <button className="px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition">
            Print Recipe 🖨️
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualRecipe;

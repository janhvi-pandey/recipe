import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; 

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const fetchRecipe = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="flex items-center justify-center text-3xl font-semibold text-amber-950 pt-10 pb-7">
        What to cook?
        <span className="text-amber-400 ml-2">Choose your favourite Recipes</span>
      </h1>

     
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-items-center m-8 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="flex flex-col border rounded-3xl w-[330px] mb-5 shadow-lg">
              <img className="rounded-t-3xl w-[330px] h-[200px] object-cover" src={recipe.image} alt={recipe.name} />
              <h2 className="flex items-center p-2 justify-center font-semibold text-lg">{recipe.name}</h2>
              <button
                className="bg-black text-white border-1 cursor-pointer p-3 rounded-b-3xl"
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              >
                Try it out!
              </button>
            </div>
          ))}
        </div>
      )}

      {/* End Section */}
      <div className="flex items-center justify-center h-[300px] bg-black text-white">
        <div className="p-2 rounded-lg text-center">
          <h1 className="text-4xl font-semibold pt-2">Let's Get Cooking!</h1>
          <p className="mt-4 text-lg">
            Unlock a world of culinary variety and unleash your inner chef the easy way with{" "}
            <span className="font-semibold text-amber-400">RecipeHub</span>.
          </p>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Recipes;

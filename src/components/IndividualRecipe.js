import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen ">
      <Navbar />
      <div className="w-[1000px] mx-auto flex flex-col justify-center">
        <div className="flex items-center justify-center text-3xl pt-30 pb-10 text-amber-400">
          Dive in to taste the magic of this recipe!
        </div>
        <div className="flex flex-row text-white items-center justify-center gap-10 pt-4">
          <div className="flex flex-col">
            <h1 className="text-xl text-gray-300 font-semibold">Let's Cook</h1>
            <span className="text-5xl font-bold">{recipe.name}</span>
          </div>
          <img
            className="rounded-3xl w-[400px] h-[400px]"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
        <div>
          <h2 className="flex items-center justify-center text-3xl pt-30 pb-5 text-amber-400">
            Instructions:
          </h2>
          <ul className="p-6 justify-items-center">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-between pt-2 px-15">
          <div>
            <h2 className="text-3xl pl-5 pt-10 pb-5 text-amber-400">Ingredients Used:</h2>
            <ul className="p-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 items-center justify-items-center pt-14 gap-6">
            {[
              { label: "Cuisine", value: recipe.cuisine },
              { label: "Servings", value: recipe.servings },
              { label: "Prep Time", value: recipe.prepTimeMinutes },
              { label: "Cook Time", value: recipe.cookTimeMinutes },
              { label: "Difficulty", value: recipe.difficulty },
              { label: "Rating", value: recipe.rating },
            ].map((item, index) => (
              <div key={index} className="flex flex-col w-[200px] border-2 p-3 items-center justify-center rounded-2xl">
                <h1>{item.label}</h1>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  
};

export default IndividualRecipe;

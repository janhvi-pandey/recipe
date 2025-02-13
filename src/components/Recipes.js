import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipe = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setRecipes(data.recipes);
      console.log(recipes);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
    <Navbar/>
      <h1 className="flex items-center justify-center text-3xl font-semibold text-amber-950 pt-30 pb-7">What to cook?<span className='text-amber-400 ml-2'>Choose your favourite Recipes</span> </h1>
      <div className="grid grid-cols-3 items-center justify-items-center m-8 gap-8  ">
        {recipes.map((recipe, index) => (
          <div key={index} className=" flex flex-col border rounded-3xl w-[330px] mb-5 ">
            <img className='rounded-t-3xl  w-[330px]' src={recipe.image} alt="recipe" />
            <h2 className="flex items-center p-2 justify-center font-semibold text-lg">{recipe.name}</h2>
            <button className="bg-black text-white border-1 cursor-pointer p-3 rounded-b-3xl">Try it out!</button>
         
            {/* <p>{recipe.description}</p>
                <p>{recipe.ingredients}</p> */}
          </div>
        ))}
      </div>

           
 {/* End section  */}
  <div className="flex items-center justify-center  h-[300px] bg-black text-white">
        <div className="p-2 rounded-lg">
          <h1 className="text-4xl font-semibold pt-2 flex items-center justify-center">Lets Get Cooking!</h1>
          <p className="mt-4  text-lg">
            Unlock a world of culinary variety and unleash your inner chef the
            easy way with{" "}
            <span className="font-semibold text-amber-400">RecipeHub</span>.
          </p>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Recipes;

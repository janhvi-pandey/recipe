import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// import image1 from "../../public/images/image1.png"

const Home = () => {
  return (
    <div>
      <div className="pb-10">
        <Navbar />
      </div>

      {/* Hero container */}
      <div className="flex items-center justify-start p-16  h-[655px] bg-[url('/images/image1.png')] bg-cover bg-right bg-no-repeat">
        <div className="max-w-xl text-black p-6 rounded-lg">
          <h1 className="text-6xl font-bold">Adventure of Delicacies</h1>
          <p className="mt-4 text-lg">
            Unlock a world of culinary variety and unleash your inner chef the
            easy way with{" "}
            <span className="font-semibold text-amber-900">RecipeHub</span>.
          </p>
        </div>
      </div>

      {/* features section */}
      <div>
        <h1 className="text-4xl font-medium pb-5 text-amber-900 mt-12 flex flex-row items-center justify-center">
          Key Features
        </h1>
        <div className="flex flex-row justify-center gap-6 p-6 ">
          <div
            className=" p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl text-gray-950 font-semibold pb-4">
              User-Centered
            </h2>
            <p className="text-lg">
              Your feedback shapes our platform, ensuring a seamless and
              satisfying culinary journey.
            </p>
          </div>
          <div
            className=" p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl  text-gray-950 font-semibold pb-4">
              Diverse recipes
            </h2>
            <p className="text-lg">
              We celebrate diverse culinary traditions from around the world,
              inspiring you today.
            </p>
          </div>
          <div
            className="p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl  text-gray-950 font-semibold pb-4">
              Fun Community
            </h2>
            <p className="text-lg">
              We foster a vibrant foodie community where joy comes with sharing
              recipes with us.
            </p>
          </div>
          
          
         
        </div>
        <div
        className='flex flex-row justify-center gap-6 p-6 pt-1'>
             <div
            className=" p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl text-gray-950 font-semibold pb-4">
              User-Centered
            </h2>
            <p className="text-lg">
              Your feedback shapes our platform, ensuring a seamless and
              satisfying culinary journey.
            </p>
          </div>
          <div
            className=" p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl  text-gray-950 font-semibold pb-4">
              Diverse recipes
            </h2>
            <p className="text-lg">
              We celebrate diverse culinary traditions from around the world,
              inspiring you today.
            </p>
          </div>
          <div
            className="p-4 m-4 bg-gray-100  rounded-lg
            shadow-md"
          >
            <h2 className="text-2xl  text-gray-950 font-semibold pb-4">
              Fun Community
            </h2>
            <p className="text-lg">
              We foster a vibrant foodie community where joy comes with sharing
              recipes with us.
            </p>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className=" p-16 flex flex-col items-center justify-center">
        <h1 className="text-amber-900 font-semibold text-4xl pb-4">
          Become a true chef with our recipes.
        </h1>
        <h2 className="text-gray-600 font-semibold text-xl pb-5">
          We are a home to variety of recipes worldwide for you to learn.
        </h2>
        <div className="flex flex-row gap-4 pt-14 justify-evenly">
          {" "}
          <p className="text-[17px] w-1/2 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
            impedit nam exercitationem voluptatibus voluptas eius quaerat
            architecto necessitatibus et quibusdam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. 
            fugiat! Nobis explicabo sunt repellat non ratione minus ab eos ipsam
            quam ullam incidunt atque consequatur facere quibusdam eum a
            voluptatem, nulla animi! Ad laudantium vero suscipit voluptatibus
            eum voluptas consectetur? Architecto similique earum pariatur
            placeat dolorem harum aliquam non, quam error labore sequi quod
            porro. Modi voluptate sapiente architecto nostrum vel libero nemo,
            in, distinctio sit velit, et quibusdam maxime?
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, autem exercitationem tenetur dolores nulla itaque quis
            esse cupiditate eos eveniet aut rem alias sunt facere dignissimos
            voluptas dolor in omnis. Quisquam culpa amet omnis nihil nobis
            consequatur recusandae repellendus odio ex laudantium animi,
            inventore veniam odit unde quibusdam libero ullam placeat eos
            tenetur veritatis quas minima deserunt! Accusamus, ducimus. Odit?
          </p>
          <div>
            <img src="/images/image2.png" alt="image" />
          </div>
        </div>
      </div>
      
 {/* End section  */}
  <div className="flex items-center justify-start p-16 mt-5 mb-1  h-[655px] bg-[url('/images/image.png')] bg-cover bg-right bg-no-repeat">
        <div className="max-w-xl text-black p-6 rounded-lg">
          <h1 className="text-6xl font-bold">Lets Get Cooking!</h1>
          <p className="mt-4 text-lg">
            Unlock a world of culinary variety and unleash your inner chef the
            easy way with{" "}
            <span className="font-semibold text-amber-900">RecipeHub</span>.
          </p>
        </div>
      </div>

      {/* footer section */}
      <Footer/>
    </div>
  );
};

export default Home;

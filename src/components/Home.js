import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// import image1 from "../../public/images/image1.png"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="pb-10">
  <Navbar />
</div>

{/* Hero Section */}
<div className="flex items-center justify-start p-8 md:p-16 h-[500px] md:h-[655px] bg-[url('/images/image1.png')] bg-cover bg-center bg-no-repeat">
  <div className="max-w-xl text-black p-6 rounded-lg">
    <h1 className="text-4xl md:text-6xl font-bold">Adventure of Delicacies</h1>
    <p className="mt-4 text-base md:text-lg">
      Unlock a world of culinary variety and unleash your inner chef the easy way with{" "}
      <span className="font-semibold text-amber-900">RecipeHub</span>.
    </p>
  </div>
</div>

{/* Features Section */}
<div>
  <h1 className="text-3xl md:text-4xl font-medium pb-5 text-amber-900 mt-12 flex justify-center">
    Key Features
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {[
      { heading: "User-Centered", content: "Your feedback shapes our platform, ensuring a seamless and satisfying culinary journey." },
      { heading: "Diverse Recipes", content: "We celebrate diverse culinary traditions from around the world, inspiring you today." },
      { heading: "Personalized Experience", content: "Discover recipes tailored to your taste and preferences." },
      { heading: "Community Driven", content: "Share your own recipes and get inspired by others." },
      { heading: "Step-by-Step Guides", content: "Easy-to-follow instructions to help you cook like a pro." },
      { heading: "Ingredient Substitutes", content: "Find alternative ingredients for every recipe." },
    ].map((feature, index) => (
      <div key={index} className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold">{feature.heading}</h2>
        <p className="text-lg">{feature.content}</p>
      </div>
    ))}
  </div>
</div>

{/* About Section */}
<div className="p-8 md:p-16 flex flex-col items-center justify-center">
  <h1 className="text-amber-900 font-semibold text-3xl md:text-4xl pb-4 text-center">
    Become a true chef with our recipes.
  </h1>
  <h2 className="text-gray-600 font-semibold text-lg md:text-xl pb-5 text-center">
    We are home to a variety of recipes worldwide for you to learn.
  </h2>
  <div className="flex flex-col md:flex-row gap-4 pt-10 items-center">
    <p className="text-[16px] md:text-[17px] w-full md:w-[600px]">
      Lorem ipsum, dolor sit
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident similique reprehenderit omnis, suscipit eos facilis officiis id aliquid quasi blanditiis porro quae, laudantium nulla harum animi iure cum ducimus consequuntur.
      Iure modi libero maiores nostrum. Ipsu deserunt antium ea, rem, sit atque repellendus. Soluta amet deserunt dicta facilis ullam aliquid dolorum tempore! Culpa, saepe ducimus?
      Rem quisquam quo nobis recusandae assumenda eum. Culpa rem officiis praesentium repudiandae quod, neque laboriosam voluptatibus nesciunt pariatur ducimus sunt fugiat porro minima incidunt obcaecati ut quo necessitatibus facere. Nesciunt? amet consectetur adipisicing elit. Est, impedit nam exercitationem voluptatibus voluptas eius quaerat architecto necessitatibus et quibusdam...
    </p>
    <div className="w-full md:w-[450px] ">
      <img src="/images/image2.png" alt="Cooking" className="w-full rounded-2xl" />
    </div>
  </div>
</div>

{/* End Section */}
<div className="flex items-center justify-start p-8 md:p-16 mt-5 mb-1 h-[500px] md:h-[655px] bg-[url('/images/image.png')] bg-cover bg-center bg-no-repeat">
  <div className="max-w-xl text-black p-6 rounded-lg">
    <h1 className="text-4xl md:text-6xl font-bold">Let's Get Cooking!</h1>
    <p className="mt-4 text-base md:text-lg">
      Unlock a world of culinary variety and unleash your inner chef the easy way with{" "}
      <span className="font-semibold text-amber-900">RecipeHub</span>.
    </p>
  </div>
</div>

{/* Footer Section */}
<Footer />

    </div>
  );
};

export default Home;

// import Login from "./(auth)/Login/Login";
// import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-10">
        <div className="text-orange-500 font-bold tracking-normal font-serif">
          <h1 className="text-4xl md:text-5xl lg:text-6xl m-5 hover:text-gray-700 cursor-pointer">
            My Name is Hooria Khan
          </h1>
          <hr className="my-4 border-orange-300" />
          <p className="text-2xl md:text-4xl lg:text-5xl hover:text-red-600 cursor-pointer">
            This is My First Next.JS Page
          </p>
          <hr className="my-4 border-orange-300" />
          <p className="text-xl md:text-2xl lg:text-3xl m-5 hover:text-gray-700 cursor-pointer">
            I am a Front-End Web Developer
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">
            Meet Hooria Khan
          </h2>
          <p className="text-lg md:text-xl text-center mt-4 mb-6 max-w-2xl mx-auto">
            I’m a passionate front-end developer with a love for creating
            visually stunning and user-friendly websites. My journey in web
            development has been filled with excitement, learning, and growth,
            and I’m always eager to take on new challenges and opportunities.
            Explore my work and get to know me better through this website!
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            My Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Image
              src="/imagaes/res.png"
              alt="Project 1"
              className="w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              width={400}
              height={300}
            />
            <Image
              src="/imagaes/ecom.jpg"
              alt="Project 2"
              className="w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              width={400}
              height={300}
            />
            <Image
              src="/imagaes/wed.jpg"
              alt="Project 3"
              className="w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

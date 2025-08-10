import React from 'react';
import backgroundImg from '../assets/Background1.jpg';

const Hero = () => {
  return (
    <section id='Home'
      className="h-screen bg-cover bg-center text-white flex items-center "
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className=" p-8 rounded">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          Shopping And Department Store
        </h1>
        <p className="mb-6 text-lg max-w-xl">
          Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
        </p>
      </div>
    </section>
  );
};

export default Hero;

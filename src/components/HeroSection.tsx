
import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '../assests/imagesmusico.png';


const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <div className="bg-purple-600 p-8 relative mb-10">
              <div className="absolute -bottom-6 right-10 h-12 w-48 bg-purple-600 transform rotate-12"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                MUSIC SHOW
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                A experiência musical que vai transformar sua noite.
                Venha sentir a batida e desfrutar de um espetáculo único.
              </p>
              <div className="inline-block bg-black p-2">
                <button className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white transition-colors">
                  SAIBA MAIS
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-6 ml-8">
              <ArrowDown className="animate-bounce" size={24} />
              <span className="uppercase font-medium">Role para explorar</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="w-full h-96 md:h-[500px] bg-gray-900 overflow-hidden relative">
              <img 
                src={heroImage} 
                alt="Performer silhouette" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-purple-600 p-8">
                <h2 className="text-3xl font-bold">PARTY YOUR</h2>
                <h2 className="text-3xl font-bold">#HEART OUT</h2>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 h-20 w-40 bg-purple-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

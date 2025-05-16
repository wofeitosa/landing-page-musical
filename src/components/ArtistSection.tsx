
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ArtistSection = () => {
  return (
    <section id="artist" className="py-20 px-6 md:px-10 lg:px-20 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-gray-900 p-8">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Artist performing" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <div className="bg-purple-600 p-8 relative">
              <h2 className="text-4xl font-bold mb-2">JOHN DOE</h2>
              <div className="flex items-center space-x-4 mb-6">
                <ArrowLeft size={20} />
                <p className="text-sm uppercase">DJ principal</p>
                <ArrowRight size={20} />
              </div>
              <p className="text-gray-200 mb-8">
                Com mais de uma década de experiência, John Doe é conhecido por suas mixagens
                impressionantes e capacidade de ler a energia da pista. Suas performances combinam
                house, techno e batidas eletrônicas que garantem uma noite inesquecível.
              </p>
              <button className="px-6 py-2 bg-black text-white hover:bg-white hover:text-black transition-colors">
                VER BIOGRAFIA COMPLETA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;

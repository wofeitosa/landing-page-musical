
import React from 'react';

const EventDetails = () => {
  return (
    <section id="event" className="py-16 px-6 md:px-10 lg:px-20 bg-gray-900 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="bg-black p-5">
              <h2 className="text-2xl font-bold mb-3">DATA</h2>
              <p className="text-lg">20 de Maio, 2025</p>
              <p className="text-lg mb-4">Início às 22h</p>
              <div className="h-1 w-16 bg-purple-600 my-4"></div>
            </div>
          </div>
          
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="bg-black p-5">
              <h2 className="text-2xl font-bold mb-3">LOCAL</h2>
              <p className="text-lg">Centro de Eventos</p>
              <p className="text-lg mb-4">São Paulo, SP</p>
              <div className="h-1 w-16 bg-purple-600 my-4"></div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-black p-5">
              <h2 className="text-2xl font-bold mb-3">ATRAÇÕES</h2>
              <p className="text-lg">5 DJs Internacionais</p>
              <p className="text-lg mb-4">3 Bandas ao Vivo</p>
              <div className="h-1 w-16 bg-purple-600 my-4"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="bg-purple-600 p-8 relative">
            <p className="text-lg italic text-center">
              "Uma experiência musical única que combina as melhores batidas eletrônicas com
              performances ao vivo que vão te deixar sem fôlego."
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-5 left-0 right-0 h-10 bg-purple-600 transform -skew-y-2"></div>
    </section>
  );
};

export default EventDetails;

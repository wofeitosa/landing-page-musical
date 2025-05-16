
import React from 'react';
import { toast } from '@/hooks/use-toast';

const TicketSection = () => {
  const handleReserveTicket = () => {
    toast({
      title: "Reserva iniciada!",
      description: "Em breve entraremos em contato para confirmar sua reserva.",
      duration: 3000,
    });
  };

  return (
    <section id="tickets" className="py-20 px-6 md:px-10 lg:px-20 bg-black">
      <div className="container mx-auto">
        <div className="bg-purple-600 p-8 md:p-12 mb-16 relative">
          <h2 className="text-4xl font-bold mb-6 text-center">RESERVE TICKETS!</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-10">
            Garanta seu lugar nesta experiência única. Os ingressos são limitados e a procura é alta.
            Faça sua reserva agora e prepare-se para uma noite inesquecível.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleReserveTicket}
              className="px-10 py-4 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              RESERVAR AGORA
            </button>
          </div>
          
          <div className="absolute -top-5 left-10 h-10 w-20 bg-purple-600 transform rotate-12"></div>
          <div className="absolute -bottom-5 right-10 h-10 w-20 bg-purple-600 transform -rotate-12"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-3">PISTA</h3>
            <p className="text-3xl font-bold mb-2">R$ 120</p>
            <p className="text-gray-400 mb-6">Acesso à área da pista</p>
            <button onClick={handleReserveTicket} className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-colors">
              RESERVAR
            </button>
          </div>
          
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-3">VIP</h3>
            <p className="text-3xl font-bold mb-2">R$ 220</p>
            <p className="text-gray-400 mb-6">Área VIP com bar exclusivo</p>
            <button onClick={handleReserveTicket} className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-colors">
              RESERVAR
            </button>
          </div>
          
          <div className="bg-gray-900 p-6">
            <h3 className="text-xl font-bold mb-3">PREMIUM</h3>
            <p className="text-3xl font-bold mb-2">R$ 350</p>
            <p className="text-gray-400 mb-6">Acesso ao backstage + open bar</p>
            <button onClick={handleReserveTicket} className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-colors">
              RESERVAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;

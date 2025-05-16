
import React from 'react';

const FreeDelivery = () => {
  return (
    <section id="delivery" className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Entrega Grátis</h2>
            <p className="text-gray-600 mb-6">
              Para pedidos acima de R$ 50, oferecemos entrega gratuita para toda a cidade. 
              Receba suas refeições saudáveis no conforto da sua casa, mantendo toda a 
              qualidade e frescor dos nossos ingredientes.
            </p>
            <div className="relative mb-8">
              <blockquote className="italic text-lg text-gray-700 pl-6 border-l-4 border-secondary">
                "Comida saudável, fresca e deliciosa entregue na minha porta. Melhor decisão que tomei para minha saúde!"
              </blockquote>
              <p className="mt-3 pl-6 font-medium">— Ana Oliveira, Cliente</p>
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 transition-colors">
              Fazer Pedido
            </button>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="blob-shape bg-secondary/20 absolute -top-10 -right-10 w-64 h-64 -z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Legumes frescos e vegetais orgânicos" 
                className="rounded-2xl shadow-xl relative z-10 w-full"
              />
              <div className="blob-shape bg-accent/40 absolute -bottom-10 -left-10 w-48 h-48 -z-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social proof section */}
      <div className="container mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary">500+</h3>
            <p className="text-gray-600">Pedidos Diários</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary">15+</h3>
            <p className="text-gray-600">Opções de Pratos</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary">98%</h3>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary">30min</h3>
            <p className="text-gray-600">Tempo Médio de Entrega</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDelivery;

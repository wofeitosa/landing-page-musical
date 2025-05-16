
import React from 'react';

const OrderSteps = () => {
  return (
    <section id="howto" className="py-16 px-6 md:px-10 lg:px-20 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Como Fazer o Pedido</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fazer seu pedido é rápido e simples. Siga estes passos para desfrutar de nossas deliciosas refeições saudáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Escolha o Prato</h3>
            <p className="text-gray-600">
              Navegue pelo nosso menu e selecione as opções que mais te agradam para uma refeição saudável e gostosa.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Realize o Pagamento</h3>
            <p className="text-gray-600">
              Escolha a forma de pagamento que preferir. Aceitamos cartões de crédito, débito e PIX.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">Receba sua Entrega</h3>
            <p className="text-gray-600">
              Acompanhe seu pedido pelo app e receba sua refeição fresca e saudável no conforto da sua casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSteps;

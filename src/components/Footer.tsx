
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-10 lg:px-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">MUSIC SHOW</h3>
            <p className="max-w-xs text-gray-400">
              A melhor experiência em shows e eventos musicais para os amantes de música eletrônica.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-sm">NAVEGAÇÃO</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#event" className="hover:text-white transition-colors">Evento</a></li>
                <li><a href="#artist" className="hover:text-white transition-colors">Artistas</a></li>
                <li><a href="#tickets" className="hover:text-white transition-colors">Ingressos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">INFORMAÇÕES</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">CONTATO</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@musicshow.com</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">REDES SOCIAIS</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Music Show. Todos os direitos reservados.
          </p>
          
          <div className="mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors text-sm">
              CONTATE-NOS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

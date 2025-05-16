
import React, { useState } from 'react';
import { popularMenuItems } from '../data/menuData';
import { toast } from '@/hooks/use-toast';

const PopularMenu = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCartItems([...cartItems, id]);
    toast({
      title: "Item adicionado!",
      description: "O prato foi adicionado ao seu carrinho.",
      duration: 3000,
    });
  };
  
  return (
    <section id="menu" className="py-16 px-6 md:px-10 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Menu Popular</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossos pratos mais amados, preparados com ingredientes frescos e orgânicos para uma refeição nutritiva e deliciosa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularMenuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">{item.name}</h3>
                  <span className="text-accent-foreground font-bold bg-accent px-3 py-1 rounded-full">
                    R$ {item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  className="w-full py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                  onClick={() => handleAddToCart(item.id)}
                >
                  Encomendar
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-colors font-medium">
            Ver Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;

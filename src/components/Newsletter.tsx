
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setIsValid(false);
      return;
    }
    
    const valid = validateEmail(email);
    setIsValid(valid);
    
    if (valid) {
      toast({
        title: "Inscrição concluída!",
        description: "Obrigado por se inscrever em nossa newsletter.",
        duration: 3000,
      });
      setEmail('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
      <p className="text-blue-100 mb-4">
        Inscreva-se para receber novidades e promoções especiais.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="relative">
          <input 
            type="email" 
            placeholder="Seu email" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!isValid) setIsValid(true);
            }}
            className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${isValid ? 'focus:ring-primary border-transparent' : 'border-red-500 focus:ring-red-500'}`}
          />
          {!isValid && (
            <p className="text-xs text-red-300 mt-1">
              Por favor, insira um email válido.
            </p>
          )}
        </div>
        <button 
          type="submit" 
          className="bg-accent text-gray-800 hover:bg-accent/90 transition-colors font-medium rounded-lg px-4 py-3"
        >
          Inscrever
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

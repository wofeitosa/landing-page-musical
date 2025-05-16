
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import heroImage from '../assests/imagesmusico.png';
const NewsletterSection = () => {
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
        description: "Você foi inscrito para receber as novidades do evento.",
        duration: 3000,
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="bg-purple-600 p-8 h-full flex flex-col justify-between">
              <h2 className="text-3xl font-bold mb-6">NEWSLETTER</h2>
              <p className="mb-6 text-lg">
                Inscreva-se para receber as últimas novidades, datas de eventos e promoções
                exclusivas para nossos shows.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (!isValid) setIsValid(true);
                    }}
                    className={`w-full px-4 py-3 bg-black text-white border ${isValid ? 'border-white/30' : 'border-red-500'} focus:outline-none focus:border-white`}
                  />
                  {!isValid && (
                    <p className="text-xs text-red-300 mt-1">
                      Por favor, insira um email válido.
                    </p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                  INSCREVER
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-full w-full bg-black overflow-hidden">
              <img 
                src={heroImage} 
                alt="Event atmosphere" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;


import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import EventDetails from '../components/EventDetails';
import ArtistSection from '../components/ArtistSection';
import NewsletterSection from '../components/NewsletterSection';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <EventDetails />
        <ArtistSection />
        <NewsletterSection />
        <TicketSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

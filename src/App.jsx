import React from 'react';
import CardsSection from './components/CardsSection';
import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function MainPage() {
  return (
    <div>
      {/* شريط التنقل */}
      <Navbar />

      {/* قسم الصور والبطاقات */}
      <div className="flex flex-col justify-center items-center mx-5 max-lg:mx-2">
        
        {/* قسم الصور (ImageCard) */}
        <div className="flex w-full justify-center items-center">
          <ImageCard />
        </div>
        
        {/* قسم البطاقات (CardsSection) */}
        <CardsSection />
        <ProductCard />
      </div>
    </div>
  );
}

export default MainPage;

import React from 'react';

function ProductBanner() {
  return (
    <div className="flex flex-wrap justify-between items-center bg-white border rounded-lg p-4 my-5 w-full shadow-md max-md:flex-col max-md:items-center">
      {/* القسم النصي على اليسار */}
      <div className="flex flex-col w-1/2 max-md:w-full max-md:text-center">
        <h2 className="text-xl font-bold mb-1">Bose Bluetooth Wireless Headphones</h2>
        <p className="text-gray-600 mb-2 text-sm">Crisp powerful sound from the best sounding wireless headphone in its class</p>
      </div>

      {/* القسم الأوسط للسعر والزر */}
      <div className="flex flex-col justify-center items-end w-1/4 max-md:w-full max-md:items-center max-md:mt-3">
        <div className="flex items-center gap-3 mb-3">
          <p className="text-gray-400 line-through text-sm">$260.50</p>
          <p className="text-green-600 text-xl font-semibold">$219.05</p>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition inline-block">
          Shop Now
        </button>
      </div>

      {/* صورة المنتج في أقصى اليمين */}
      <div className="w-1/4 max-md:w-full max-md:mt-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPS8t-UOVToVVnrUOaMF922Krlf7HqcMvVw&s"
          alt="Bose Headphones"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default ProductBanner;

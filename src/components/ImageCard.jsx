import chair from '../assets/chair1.png';
import img2 from '../assets/img2.png';

function ImageCard() {
  return (
    <div className="flex my-4 justify-center items-center w-full max-md:flex-col max-md:gap-5 max-md:flex-wrap">
      
      {/* الصورة الأولى مع نقاط وأسهم */}
      <div className="relative bg-gray-100 h-full flex justify-center items-center gap-10 mx-10 border w-2/3 max-md:230">
        
        {/* أسهم التمرير (مخفية في الشاشات الصغيرة) */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block">
          <button className="bg-gray-200 p-2 rounded-full">‹</button>
        </div>

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block">
          <button className="bg-gray-200 p-2 rounded-full">›</button>
        </div>

        {/* المحتوى النصي */}
        <div className="flex flex-col gap-4 p-5 w-1/2">
          <p className="text-left tracking-wide text-lg font-bold">
            WOODEN MINIMALISTIC CHAIRS
          </p>
          <div>
            <p>SALE UP TO</p>
            <p className="text-green-700 text-2xl font-semibold">40% Off</p>
          </div>
          <div className="bg-yellow-400 w-max px-6 py-2 rounded font-bold cursor-pointer hover:bg-yellow-500 transition-all">
            Shop Now
          </div>
        </div>

        {/* الصورة الأولى */}
        <img className="w-1/3 max-md:w-230 max-md:h-auto h-[300px]" src={chair} alt="Wooden Chair" />

        {/* النقاط السفلية للتمرير */}
        <div className="absolute bottom-4 flex justify-center gap-2">
          <span className="block w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-200 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-200 rounded-full"></span>
        </div>
      </div>

      {/* الصورة الثانية */}
      <div className="bg-gray-100 h-full flex justify-center items-center mx-10 border  max-md:w-full">
        <img className="w-full h-[300px] object-cover" src={img2} alt="T-Shirts for Summer" />
      </div>
    </div>
  );
}

export default ImageCard;

import React from 'react';

export default function ResponsiveGuide() {
  return (
    <>
      <h2>🔥 1. Mobile-First Approach</h2>
      <p>
        By default, Tailwind mobile-first hai, iska matlab hai tum pehle small screen (mobile) ka design banao,
        phir gradually larger screens ke liye style add karo.
      </p>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-100">
        {/* Yeh padding har screen size pe adjust ho gi */}
      </div>
      
      <h2>🔥 2. Width Control for Containers</h2>
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Yeh card center me ayega aur width adjust karega */}
      </div>
      
      <h2>🔥 3. Flexbox for Alignment</h2>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        {/* Yeh div vertically aur horizontally center ho ga */}
      </div>
      
      <h2>🔥 4. Grid for Responsive Layouts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">Box 1</div>
        <div className="bg-gray-300 p-4">Box 2</div>
        <div className="bg-gray-400 p-4">Box 3</div>
      </div>
      
      <h2>🔥 5. Hide / Show Elements on Different Screens</h2>
      <p className="block md:hidden">Yeh sirf mobile pe dikhay ga</p>
      <p className="hidden md:block">Yeh sirf desktop pe dikhay ga</p>
      
      <h2>🔥 6. Responsive Text Sizing</h2>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        Responsive Heading
      </h1>
      
      <h2>🔥 7. Buttons Responsive Banane Ka Tarika</h2>
      <button className="px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-500 rounded-lg">
        Click Me
      </button>
      
      <h2>🔥 8. Images Responsive Rakhna</h2>
      <img src="image.jpg" className="max-w-full h-auto rounded-lg" alt="Responsive Image" />
      
      <h2>🔥 9. Navbar Responsive Trick</h2>
      <nav className="p-4 flex items-center justify-between bg-gray-800 text-white">
        <h1 className="text-lg sm:text-xl font-bold">Logo</h1>
        <button className="block sm:hidden">☰</button> 
        <ul className="hidden sm:flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
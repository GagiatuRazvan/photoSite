import React from 'react';
import { Camera, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          <div className="flex items-center mb-8">
            <Camera className="w-10 h-10 text-orange-400 mr-4" />
            <span className="text-orange-400 font-medium tracking-wider text-lg">URBAN PHOTOGRAPHY BLOG</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Streets, Souls &
            <span className="text-orange-400 block">Steel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Capturing the raw energy of urban life through portraits that tell stories and automotive photography that celebrates the beauty of machines in motion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Explore My Work
            </button>
            <button className="border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 font-semibold px-10 py-4 rounded-lg transition-all duration-300">
              Read Latest Posts
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Urban</div>
              <div className="text-gray-300">Street Portraits</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Auto</div>
              <div className="text-gray-300">Car Photography</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Moto</div>
              <div className="text-gray-300">Motorcycle Shoots</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-orange-400" />
      </div>
    </section>
  );
};

export default Hero;
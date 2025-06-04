import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-700 via-blue-800 to-red-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">⭐</div>
        <div className="absolute top-32 right-20 text-4xl">🏅</div>
        <div className="absolute bottom-20 left-16 text-5xl">🛡️</div>
        <div className="absolute bottom-32 right-12 text-3xl">⚔️</div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 animate-fade-in">
          <Icon
            name="Shield"
            size={80}
            className="text-yellow-400 mb-6 mx-auto"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in font-montserrat">
          ГОД
          <span className="block text-yellow-400">ЗАЩИТНИКА</span>
          <span className="block">ОТЕЧЕСТВА</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed animate-fade-in font-open-sans opacity-90">
          Честь и слава тем, кто защищает наше Отечество! В этом году мы
          особенно чествуем героев, отдавших жизнь за Родину.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Icon name="Heart" size={20} className="inline mr-2" />
            Почтить память
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-red-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            <Icon name="Book" size={20} className="inline mr-2" />
            История подвигов
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-yellow-400">1945</div>
            <div className="text-sm opacity-80">Год Победы</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-yellow-400">27</div>
            <div className="text-sm opacity-80">млн погибших</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-yellow-400">∞</div>
            <div className="text-sm opacity-80">вечная память</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;

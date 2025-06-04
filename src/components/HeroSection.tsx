import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-patriot-red via-white to-patriot-blue text-white overflow-hidden">
      {/* Russian tricolor background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-patriot-red/20 via-white/10 to-patriot-blue/20"></div>

      {/* Patriotic symbols pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 text-6xl">🦅</div>
        <div className="absolute top-32 right-20 text-4xl">🇷🇺</div>
        <div className="absolute bottom-20 left-16 text-5xl">⚔️</div>
        <div className="absolute bottom-32 right-12 text-3xl">🏅</div>
        <div className="absolute top-1/2 left-20 text-4xl">🛡️</div>
        <div className="absolute top-1/3 right-1/3 text-3xl">👑</div>
      </div>

      {/* Geometric Russian flag stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 animate-fade-in">
          <Icon
            name="Shield"
            size={80}
            className="text-yellow-400 mb-6 mx-auto"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in font-montserrat text-shadow-lg">
          <span className="text-patriot-red">ГОД</span>
          <span className="block text-patriot-gold drop-shadow-lg">
            ЗАЩИТНИКА
          </span>
          <span className="block text-patriot-blue">ОТЕЧЕСТВА</span>
        </h1>

        <div className="bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue p-1 rounded-lg mb-6 inline-block">
          <div className="bg-black/80 px-6 py-3 rounded-lg">
            <p className="text-lg md:text-xl font-bold text-patriot-gold font-montserrat">
              🇷🇺 "РОССИЯ — СВЯЩЕННАЯ НАША ДЕРЖАВА" 🇷🇺
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed animate-fade-in font-open-sans opacity-90 text-shadow">
          Честь и слава тем, кто защищает наше Отечество! В этом году мы
          особенно чествуем героев, отдавших жизнь за Родину.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
          <button className="bg-gradient-to-r from-patriot-gold to-yellow-400 hover:from-yellow-400 hover:to-patriot-gold text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-patriot-gold">
            <Icon name="Heart" size={20} className="inline mr-2" />
            Почтить память героев
          </button>
          <button className="border-2 border-patriot-gold hover:bg-patriot-gold hover:text-black text-patriot-gold px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            <Icon name="Book" size={20} className="inline mr-2" />
            Летопись подвигов
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in bg-black/30 p-4 rounded-lg border border-patriot-gold/50">
            <div className="text-3xl font-bold text-patriot-gold">1945</div>
            <div className="text-sm opacity-80">Год Великой Победы</div>
          </div>
          <div className="animate-fade-in bg-black/30 p-4 rounded-lg border border-patriot-gold/50">
            <div className="text-3xl font-bold text-patriot-gold">27</div>
            <div className="text-sm opacity-80">млн павших героев</div>
          </div>
          <div className="animate-fade-in bg-black/30 p-4 rounded-lg border border-patriot-gold/50">
            <div className="text-3xl font-bold text-patriot-gold">∞</div>
            <div className="text-sm opacity-80">вечная слава</div>
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

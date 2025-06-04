import React from "react";
import Icon from "@/components/ui/icon";

const heroes = [
  {
    name: "Александр Матросов",
    role: "Герой Советского Союза",
    description: "Закрыл своим телом амбразуру вражеского дзота",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Зоя Космодемьянская",
    role: "Партизанка",
    description: "Первая женщина — Герой Советского Союза",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Алексей Маресьев",
    role: "Лётчик-истребитель",
    description: "Сбил 11 самолётов противника без ног",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Иван Кожедуб",
    role: "Трижды Герой СССР",
    description: "Самый результативный лётчик-истребитель",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  },
];

const DefendersGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-patriot-blue via-slate-900 to-patriot-red text-white relative">
      {/* Patriotic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🦅</div>
        <div className="absolute top-32 right-20 text-6xl">👑</div>
        <div className="absolute bottom-20 left-16 text-7xl">🛡️</div>
        <div className="absolute bottom-32 right-12 text-5xl">⚔️</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🇷🇺</div>
        <div className="absolute top-1/3 right-1/3 text-6xl">🏆</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-5xl">🏅</span>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
              Галерея Героев Отечества
            </h2>
            <span className="text-5xl">🏅</span>
          </div>

          <div className="bg-gradient-to-r from-patriot-gold via-white to-patriot-gold p-1 rounded-lg inline-block mb-4">
            <div className="bg-patriot-red px-6 py-3 rounded-lg">
              <p className="text-lg font-bold text-patriot-gold font-montserrat">
                🇷🇺 НИКТО НЕ ЗАБЫТ, НИЧТО НЕ ЗАБЫТО! 🇷🇺
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero, index) => (
            <div
              key={hero.name}
              className="group bg-gradient-to-br from-black/40 via-patriot-blue/20 to-black/40 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-500 border-2 border-patriot-gold/50 hover:border-patriot-gold hover:bg-patriot-gold/10"
            >
              <div className="relative mb-6">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-patriot-gold group-hover:border-white transition-colors duration-300 shadow-xl"
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-patriot-gold to-yellow-400 rounded-full p-2 border-2 border-white shadow-lg">
                  <Icon name="Star" size={16} className="text-patriot-red" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-patriot-gold font-montserrat">
                {hero.name}
              </h3>
              <p className="text-sm text-patriot-gold/80 mb-3 font-semibold">
                {hero.role}
              </p>
              <p className="text-sm opacity-80 leading-relaxed font-open-sans">
                {hero.description}
              </p>

              <div className="mt-4 pt-4 border-t border-patriot-gold/30">
                <button className="text-patriot-gold hover:text-white text-sm font-semibold transition-colors duration-300">
                  <Icon name="ExternalLink" size={14} className="inline mr-1" />
                  Подвиг героя
                  <Icon name="ExternalLink" size={14} className="inline mr-1" />
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-patriot-gold to-yellow-400 hover:from-yellow-400 hover:to-patriot-gold text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-patriot-gold">
            <Icon name="Users" size={20} className="inline mr-2" />
            Все герои Отечества
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefendersGallery;

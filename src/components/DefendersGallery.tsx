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
    <section className="py-20 bg-gradient-to-b from-blue-900 to-red-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Галерея Героев
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto font-open-sans">
            Они отдали свои жизни за наше будущее. Их имена навсегда останутся в
            наших сердцах.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero, index) => (
            <div
              key={hero.name}
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-500 border border-white/20 hover:bg-white/20"
            >
              <div className="relative mb-6">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-400 group-hover:border-yellow-300 transition-colors duration-300"
                />
                <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                  <Icon name="Star" size={16} className="text-yellow-900" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-yellow-400 font-montserrat">
                {hero.name}
              </h3>
              <p className="text-sm text-yellow-200 mb-3 font-semibold">
                {hero.role}
              </p>
              <p className="text-sm opacity-80 leading-relaxed font-open-sans">
                {hero.description}
              </p>

              <div className="mt-4 pt-4 border-t border-white/20">
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors duration-300">
                  <Icon name="ExternalLink" size={14} className="inline mr-1" />
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Icon name="Users" size={20} className="inline mr-2" />
            Все герои
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefendersGallery;

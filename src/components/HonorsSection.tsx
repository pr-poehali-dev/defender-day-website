import React from "react";
import Icon from "@/components/ui/icon";

const awards = [
  {
    title: "Герой Советского Союза",
    count: "12,777",
    description: "Высшая степень отличия СССР",
    icon: "Award",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Орден Ленина",
    count: "431,418",
    description: "Высший орден Советского Союза",
    icon: "Medal",
    color: "from-red-500 to-red-700",
  },
  {
    title: "Орден Красного Знамени",
    count: "581,300",
    description: "За особую храбрость и мужество",
    icon: "Flag",
    color: "from-red-600 to-red-800",
  },
  {
    title: "Орден Отечественной войны",
    count: "9,874,000",
    description: "Массовый боевой орден",
    icon: "Shield",
    color: "from-blue-500 to-blue-700",
  },
];

const HonorsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-patriot-gold/5 to-patriot-blue/10 relative">
      {/* Patriotic decorative stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-5xl">🏆</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-montserrat">
              Награды и Почести Отечества
            </h2>
            <span className="text-5xl">🏆</span>
          </div>

          <div className="bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue p-1 rounded-lg inline-block mb-4">
            <div className="bg-white px-6 py-3 rounded-lg">
              <p className="text-lg font-bold text-patriot-red font-montserrat">
                🇷🇺 СЛАВА И ЧЕСТЬ ЗАЩИТНИКАМ РОДИНЫ! 🇷🇺
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-patriot-red relative overflow-hidden"
            >
              {/* Patriotic corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-patriot-gold/20 to-patriot-blue/20 transform rotate-45 translate-x-10 -translate-y-10"></div>
              <div className="absolute top-2 right-2 text-patriot-gold text-sm">
                ⭐
              </div>

              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center text-white shadow-lg`}
              >
                <Icon name={award.icon} size={24} />
              </div>

              <div className="text-3xl font-bold text-slate-800 mb-2 font-montserrat">
                {award.count}
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">
                {award.title}
              </h3>
              <p className="text-sm text-slate-600 font-open-sans">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-red rounded-2xl p-8 text-white text-center relative overflow-hidden border-4 border-patriot-gold">
          {/* Patriotic background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🇷🇺</div>
            <div className="absolute top-4 right-4 text-6xl">🦅</div>
            <div className="absolute bottom-4 left-4 text-4xl">👑</div>
            <div className="absolute bottom-4 right-4 text-4xl">🛡️</div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <Icon name="Heart" size={48} className="text-patriot-gold" />
              <span className="text-4xl">🕯️</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-montserrat text-patriot-gold">
              Вечная Память Героям
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6 font-open-sans">
              Мы помним каждого, кто отдал свою жизнь за нашу свободу. Их подвиг
              будет жить в веках, а память о них передаваться из поколения в
              поколение.
            </p>
            <button className="bg-gradient-to-r from-patriot-gold to-yellow-400 hover:from-yellow-400 hover:to-patriot-gold text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-patriot-gold">
              <Icon name="Flame" size={20} className="inline mr-2" />
              Зажечь свечу памяти
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;

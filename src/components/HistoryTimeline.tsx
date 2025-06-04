import React from "react";
import Icon from "@/components/ui/icon";

const timelineEvents = [
  {
    year: "1941",
    title: "Начало Великой Отечественной",
    description: "Советский народ встал на защиту Родины",
    icon: "Sword",
  },
  {
    year: "1942",
    title: "Сталинградская битва",
    description: "Коренной перелом в ходе войны",
    icon: "Target",
  },
  {
    year: "1943",
    title: "Курская дуга",
    description: "Крупнейшее танковое сражение в истории",
    icon: "Zap",
  },
  {
    year: "1944",
    title: "Освобождение Европы",
    description: "Красная Армия освобождает страны Европы",
    icon: "Flag",
  },
  {
    year: "1945",
    title: "День Победы",
    description: "Капитуляция фашистской Германии",
    icon: "Star",
  },
];

const HistoryTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-patriot-blue/10 relative">
      {/* Patriotic decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-4xl">🇷🇺</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-montserrat">
              Героическая История Отечества
            </h2>
            <span className="text-4xl">🇷🇺</span>
          </div>
          <div className="bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue p-1 rounded-lg inline-block mb-4">
            <div className="bg-white px-4 py-2 rounded-lg">
              <p className="text-lg font-bold text-patriot-red font-montserrat">
                СЛАВА ГЕРОЯМ ВЕЛИКОЙ ОТЕЧЕСТВЕННОЙ!
              </p>
            </div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-open-sans">
            Путь к Победе был долгим и трудным. Каждый год войны — это подвиги
            миллионов защитников Отечества.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-patriot-red via-patriot-gold to-patriot-blue hidden md:block shadow-lg"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:space-x-8`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:px-8`}
                >
                  <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-patriot-red relative overflow-hidden">
                    {/* Patriotic corner decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-patriot-gold to-patriot-red opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>

                    <div className="text-3xl font-bold text-patriot-red mb-2 font-montserrat flex items-center gap-2">
                      <span className="text-patriot-gold">★</span>
                      {event.year}
                      <span className="text-patriot-gold">★</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 font-open-sans">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 my-4">
                  <div className="bg-gradient-to-br from-patriot-red via-patriot-gold to-patriot-blue rounded-full p-4 shadow-xl border-4 border-white">
                    <Icon
                      name={event.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;

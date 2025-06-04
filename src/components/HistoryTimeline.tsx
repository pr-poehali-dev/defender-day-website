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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-montserrat">
            Героическая История
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-open-sans">
            Путь к Победе был долгим и трудным. Каждый год войны — это подвиги
            миллионов защитников Отечества.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:space-x-8`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:px-8`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-red-500">
                    <div className="text-3xl font-bold text-red-600 mb-2 font-montserrat">
                      {event.year}
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
                  <div className="bg-gradient-to-br from-red-500 to-blue-600 rounded-full p-4 shadow-lg">
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

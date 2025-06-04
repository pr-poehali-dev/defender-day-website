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
    <section className="py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-montserrat">
            Награды и Почести
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-open-sans">
            Миллионы советских воинов были отмечены государственными наградами
            за мужество и героизм.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-red-500"
            >
              <div
                className={`inline-flex p-4 rounded-full bg-gradient-to-br ${award.color} mb-6`}
              >
                <Icon
                  name={award.icon as any}
                  size={32}
                  className="text-white"
                />
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

        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <Icon
            name="Heart"
            size={48}
            className="text-yellow-400 mx-auto mb-6"
          />
          <h3 className="text-3xl font-bold mb-4 font-montserrat">
            Вечная Память
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6 font-open-sans">
            Мы помним каждого, кто отдал свою жизнь за нашу свободу. Их подвиг
            будет жить в веках, а память о них передаваться из поколения в
            поколение.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Icon name="Flame" size={20} className="inline mr-2" />
            Зажечь свечу памяти
          </button>
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;

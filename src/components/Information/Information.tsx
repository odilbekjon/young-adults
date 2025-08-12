import { FC } from "react";
import { CardData } from "@/constants/CartData";

export const Information: FC = () => {
  return (
    <div className="bg-white py-8 px-4 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-teal-800 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">
              {card.icon}
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

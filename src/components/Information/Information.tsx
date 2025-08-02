import { FC } from "react";
import { CardData } from "@/constants/CartData";


export const Information: FC = () => {
  return (
    <div className="bg-white py-8 px-4 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-[30px] p-6 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="text-teal-800 mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



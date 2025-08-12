import { data } from "@/constants/Data";

export const Achievements = () => {
  return (
    <section className="hero flex items-center py-10">
      <div className="container mx-auto px-4 flex justify-center gap-8 sm:gap-12 flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white w-[120px] sm:w-[150px] lg:w-[160px]"
          >
            <div
              className="bg-orange-500 rounded-full 
                        w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 
                        flex items-center justify-center mb-3"
            >
              {item.icon}
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              {item.count}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-white text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

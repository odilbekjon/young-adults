import { data } from "@/constants/Data";

export const Achievements = () => {
  return (
    <section className="hero  flex items-center">
      <div className="container mx-auto px-4 flex justify-center gap-30 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="bg-orange-500 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%] w-40 h-40 flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <p className="text-2xl font-bold text-white">{item.count}</p>
            <p className="text-sm text-white">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

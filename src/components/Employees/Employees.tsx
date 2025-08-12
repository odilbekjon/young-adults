import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { teamMembers } from "@/constants/Employees";

export const Employees = () => {
  const [current, setCurrent] = useState(0);
  const [groupSize, setGroupSize] = useState(3);

  // 📌 Ekran o‘lchamiga qarab groupSize ni belgilash
  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth < 640) {
        setGroupSize(1);
      } else if (window.innerWidth < 1024) {
        setGroupSize(2);
      } else {
        setGroupSize(3);
      }
    };

    updateGroupSize(); // birinchi renderda chaqirish
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  // 📌 Slider avtomatik o‘tishi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(teamMembers.length / groupSize));
    }, 5000);
    return () => clearInterval(interval);
  }, [groupSize]);

  // 📌 Guruhlash
  const groupedMembers = Array.from(
    { length: Math.ceil(teamMembers.length / groupSize) },
    (_, i) => teamMembers.slice(i * groupSize, i * groupSize + groupSize)
  );

  return (
    <section id="employees" className="px-4 sm:px-6 lg:px-20 mb-20">
      <h2 className="text-center lg:text-[40px] text-[30px] font-bold text-orange-500 mb-10">
        Xodimlarimiz
      </h2>

      <Carousel className="relative">
        <CarouselContent
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {groupedMembers.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div
                className={`grid gap-8 ${
                  groupSize === 1
                    ? "grid-cols-1"
                    : groupSize === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {group.map((member, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                  >
                    <img
                      src={typeof member.image === "string" ? member.image : ""}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-orange-500 mb-4"
                    />
                    <h3 className="text-lg font-semibold text-orange-500">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

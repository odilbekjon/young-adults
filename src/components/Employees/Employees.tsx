import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { teamMembers } from "@/constants/Employees";

export const Employees = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const groupSize = 3;
  const groupedMembers = Array.from({ length: Math.ceil(teamMembers.length / groupSize) }, (_, i) =>
    teamMembers.slice(i * groupSize, i * groupSize + groupSize)
  );

  return (
    <section className="bg-orange-50 py-10 px-4 sm:px-6 lg:px-20">
      <Carousel className="relative">
        <CarouselContent
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {groupedMembers.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center min-h-[500px]"
                  >
                    <img
                      src={typeof member.image === "string" ? member.image : ""}
                      alt={member.name}
                      className="w-[200px] h-[260px] object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                    <p className="text-blue-600 text-sm mb-1">{member.role}</p>
                    <p className="text-gray-700 text-sm mb-1">{member.birth}</p>
                    <p className="text-gray-700 text-sm mb-4">{member.description1}</p>
                    <Link
                      to={`/team/${member.slug || member.name.toLowerCase().replace(/ /g, "-")}`}
                      className="mt-auto"
                    >
                      <div className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                        More about {member.name}
                      </div>
                    </Link>
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

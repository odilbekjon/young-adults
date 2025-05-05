import Teacher3 from "@/assets/Teacher3.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Yigitali Abdullaev",
    role: "CEO of Young Adults LLC",
    birth: "Yigitali Abdullaev was born in 1995, in Surkhandarya region of Uzbekistan Republic.",
    description1:
      "Yigitali Abdullaev is the Deputy of Jarkurgan Town and a passionate youth leader from Surkhandarya, Uzbekistan. He serves as the CEO of Young Adults Study, an educational center focused on empowering students through English, IT, and personal development programs.",
    description2:
      "With international academic experience in Latvia and Czech Republic, he brings a global perspective to local change. His mission is to inspire and uplift young people, especially in underserved areas.",
    image: "/team/yigitali.png",
  },
  {
    name: "Malika Karimova",
    role: "IT Program Manager",
    birth: "Malika was born in 1996 in Tashkent.",
    description1:
      "She leads IT program development at Young Adults, focusing on building student-friendly curriculum for beginners.",
    description2:
      "With experience from Germany and Korea, she is committed to helping girls in tech flourish in Uzbekistan.",
    image: Teacher3,
  },
  {
    name: "Sardorbek Usmonov",
    role: "English Department Head",
    birth: "Sardorbek was born in 1993 in Andijan region.",
    description1:
      "He has 8+ years of English teaching experience and designs interactive learning paths for students.",
    description2:
      "His international CELTA certification and training make him a leader in language education.",
    image: "/team/sardorbek.png",
  },
];

export const Employees = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <Carousel>
        <CarouselContent>
          {teamMembers.map((member, index) => (
            <CarouselItem key={index}>
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-1/3 flex justify-center relative mb-6 lg:mb-0">
                  <div className="hidden lg:block bg-blue-600 w-[240px] h-[320px] rounded-tl-[60px] rounded-br-[60px] absolute top-0 right-0 z-0" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                    {member.name} – <br />
                    <span className="text-blue-600">Background</span>
                  </h2>

                  <p className="text-gray-800 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                    {member.birth}
                  </p>
                  <p className="text-gray-800 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                    {member.description1}
                  </p>
                  <p className="text-gray-800 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                    {member.description2}
                  </p>
                  <div className="mt-5">
                    <div className="inline-block bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold px-5 py-3 rounded-xl shadow-md">
                      {member.name}
                      <br />
                      <span className="text-sm font-normal">{member.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

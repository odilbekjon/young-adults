import { Link } from "react-router-dom";
import Teacher3 from "@/assets/Teacher3.webp";
import bekhruz from  "@/assets/bekhruz.jpg"
import rasulbek from "@/assets/rasulbek.mp4"
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
    image: Teacher3,
  },
  {
    name: "Bekhruz Mansurov",
    role: "IT Specialist",
    birth: "Bekhruz was born in 2004 in Jarkurgan.",
    description1:
      "He leads Frontend development at Young Adults, focusing on building student-friendly curriculum for beginners.",
    description2:
      "With experience from Germany and Latvia, he is committed to helping students in tech flourish in Uzbekistan.",
    image: bekhruz,
  },
  {
      name: "Rasulbek Saidoov",
      role: "IT Department Head",
      birth: "Rasulbek was born in 2000 in Jarkurgan.",
      description1:
        "He studied in Germany, specializing in Business and Data Analytics. With an academic IELTS score of 7.5, he has a strong foundation in global communication and technical expertise.",
      description2:
        "Rasulbek is skilled in Python, backend and frontend development. He now leads the IT department at Young Adults, guiding students through practical and modern tech education.",
      image: rasulbek, 
      slug: "rasulbek-saidoov"
  },
];

export const Employees = () => {
  return (
    <section className="bg-orange-50 py-10 px-4 sm:px-6 lg:px-20">
      <Carousel>
        <CarouselContent>
          {teamMembers.map((member, index) => (
            <CarouselItem key={index}>
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-1/3 flex justify-center relative mb-6 lg:mb-0">
                  <div className="hidden lg:block bg-blue-600 w-[240px] h-[300px] rounded-tl-[60px] rounded-br-[60px] absolute top-0 right-0 z-0" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
                    {member.name} - <br />
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
                    <Link to={`/team/${member.slug}`}>
                      <div className="inline-block cursor-pointer bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold px-5 py-3 rounded-xl shadow-md hover:bg-blue-800 transition">
                         {member.name}
                            <br />
                   <span className="text-sm font-normal">{member.role}</span>
                        </div>
                    </Link>
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

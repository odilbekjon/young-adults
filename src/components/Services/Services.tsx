import React from "react";
// import hero from "@/assets/hero.jpg"; 
import { FaCheckCircle } from "react-icons/fa";

const services = [
  "IELTS kurslari",
  "Kids English (bolalar uchun ingliz tili)",
  "Grammar kurslari",
  "CEFR kurslari",
  "Weekly mock exams",
  "Consulting services (maslahatlar)",
  "Speaking kurslari",
  "IT kurslari (Frontend & Backend)",
  "Kompyuter savodxonligi",
];


export const Services: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
        Young Adults O'quv Markazi Xizmatlari
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img
            src={""}
            alt="Our Services"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center text-gray-800">
                <FaCheckCircle className="text-orange-500 mr-2" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

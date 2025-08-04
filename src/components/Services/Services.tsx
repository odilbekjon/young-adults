import { countries } from "@/constants";

import travel from "../../assets/travel.svg";


const Services = () => {
  return (
    <section id="services" className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-1 mt-10">
      <div className="container">
        <div className="flex items-center gap-10">
           <img src={travel} width={218} height={218} alt="travel"/>
            <div className="">
              <h2 className="max-w-[800px] text-[70px] text-left  font-bold mb-4 uppercase">
                Bizning konsalting xizmatlarimiz
              </h2>
              {/* <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                Biz sizga ta'lim, til o'rganish va chet eldagi imkoniyatlar bo'yicha to‘liq
                yo'naltirish beramiz.
              </p> */}
            </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">{country.name}</h4>
                </div>
                <p className="text-gray-700 mb-2">{country.description}</p>
                <p className="text-blue-950 font-medium">
                  IELTS minimal:{" "}
                  <span className="font-bold text-gray-800">{country.minIELTS}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> 
      {/* end of container */}
  </section>
  )
}

export default Services;
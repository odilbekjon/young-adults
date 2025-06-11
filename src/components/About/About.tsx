import { AboutData } from "@/constants/About";

export const About = () => (
  <div
    id="about"
    className="bg-gradient-to-br px-6 py-12 mx-auto"
  >
    <div className="container">
      <div className="">
        <h1 className="text-center lg:text-[50px] text-[30px] font-bold">Biz haqimizda</h1>
      </div>

      <ul  className="flex flex-wrap gap-5">
        {AboutData.map((item) => {
          return (
            <li key={item.id} className="border-orange-400 border-2 p-5 flex rounded-2xl items-center gap-5 mt-5 max-w-[450px] font-bold">
              {/* <div className="text-center">{item.image}</div> */}
              <img src={item.image as string} width={100} alt="" />
              <p className="text-[20px] mt-5">
                {item.title}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

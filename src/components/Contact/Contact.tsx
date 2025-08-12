import { BiLogoTelegram } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => (
  <div className=" px-4 py-12">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-orange-500">
        Biz bilan bog'laning
      </h1>

        <div className="flex flex-wrap justify-around mt-10 ">
            <div className="left lg:mt-0 mt-10">
                  <div className="flex flex-wrap gap-5">
                      <div className="w-full flex flex-col">
                        <Input  className="w-full border-2 border-solid border-blue-700 mt-3" placeholder="Name" />
                      </div>
                      <div className="w-full flex flex-col">
                        <Input  className="w-full border-2 border-solid border-blue-700 mt-3" placeholder="Telfon raqam" />
                      </div>
                  </div>
                  <div className="">
                    <Input className="w-full border-2 border-solid border-blue-700 mt-5" placeholder="Email" />
                  </div>
                  <div className="mt-3">
                    <Textarea  className=" border-2 border-solid border-blue-700 h-30 mt-2 resize-none" placeholder="savollaringizni yo'llang" />
                  </div>
                    <Button className="mt-5 mb-5 lg:mb-0 bg-blue-700 text-white w-full " >Jo'natish</Button>
              </div>
              <div className="right border-2 border-solid border-blue-700 p-5 rounded-2xl">
                    <p className="mb-2"> <b>Manzil:</b> O‘zbekiston, Toshkent shahri, Mustaqillik ko‘chasi, 12-uy</p>
                    <p className="mb-2"> <b>Telfon:</b> +99890 123 45 67</p>
                    <p className="mb-2"> <b>Email:</b> youngadults@gmail.com</p>
                    <p className=" max-w-[400px]">
                      Biz bilan bog‘laning – har qanday savollaringizga mamnuniyat bilan javob beramiz! 😊
                    </p>
                    <a href="https://www.google.com/maps/place/Young+Adults/@37.5088102,67.4222738,16.57z/data=!4m6!3m5!1s0x38cab3d53610b179:0x61a07dfa91acc6a8!8m2!3d37.5092822!4d67.4212738!16s%2Fg%2F11s2plj3zg?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="font-bold text-center text-[25px] my-5 block">Xaritadan ko’rish</a>
                    <a href="https://t.me/rasulbek_jurabekugli" target="_blank" className="p-2 bg-blue-700 flex items-center justify-center gap-5 text-white rounded-lg font-bold"><BiLogoTelegram size={30} color="white" /> Telegram orqali bog'lanish</a>
                
              </div>
        </div>
          </div>
        </div>

);

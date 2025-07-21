import youngAdults from "../../assets/young-adults2.png";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export const Hero = () =>   {
  return(
    <div className="bg-gradient-to-br px-6 py-12 ">
        <div className="container mx-auto flex flex-wrap gap-10 justify-between lg:text-left md:text-center sm:text-center">
            <div className="">
                <h1 className="max-w-[650px] text-3xl md:text-5xl font-bold text-black mb-6 leading-snug">
                  Xush kelibsiz <span className="text-orange-500">Young Adults</span> 
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-8">
                    Kelajagingizni biz bilan birga bunyod qiling — <strong>IT</strong> va <strong>Ingliz tili</strong> bo‘yicha eng sifatli darslar sizni kutmoqda.
                    Bilim olishga chanqoq yoshlar jamiyatiga qo'shiling va ko'nikmalaringizni yangi bosqichga olib chiqing!
                </p>
               
                <Dialog>
          <DialogTrigger>
             <button
                  className="mt-3 bg-orange-500 hover:cursor-pointer text-white font-semibold px-6 py-6 rounded-lg text-2xl"
                >  
                  Hoziroq ro'yxatdan o'ting
                </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
               <DialogTitle className="text-center text-[25px]">Ro'yxatdan o’tish</DialogTitle>
            </DialogHeader>
              <DialogDescription >
                  <div className="">
                    <IoPersonSharp className="relative left-2 top-7 mt-2"  size={20}/>
                    <Input className="pl-10" placeholder="Ism" type="text" />
                  </div>
                  <div className="">
                    <IoPersonSharp className="relative left-2 top-7 mt-2"  size={20}/>
                    <Input className="pl-10" placeholder="Familya" type="text" />
                  </div>
                  <div className="">
                    <FaPhone className="relative left-2 top-7 mt-2"  size={20}/>
                    <Input className="pl-10" placeholder="Telfon raqam" type="text" />
                  </div>
                  <div className="">
                    <IoMdMailUnread className="relative left-2 top-7"  size={20}/>
                    <Input className="pl-10" placeholder="Email" type="text" />
                  </div>
                  <Button className="bg-orange-500 w-full mt-5 text-center font-bold text-[15px]">Ro'yxatdan o'tish</Button>
              </DialogDescription>
          </DialogContent>
        </Dialog>
            </div>
            <div className="">
               <img className="hero-img" src={youngAdults} width={600} height={400} alt="" />
            </div>
        </div>
    </div>
  )   
}
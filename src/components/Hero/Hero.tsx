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

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'



export const Hero = () =>   {
  return(
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[80vh]"
      >
        {/* SLIDE 1 - VIDEO */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            {/* <video
              src={""}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            /> */}
            <img src={youngAdults} alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Biz bilan kelajagingizni yarating!</h1>
                <p className="text-xl max-w-xl mb-6">IT va Ingliz tili kurslarimizga xush kelibsiz!</p>
                <Dialog>
                  <DialogTrigger>
                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-xl">
                      Ro'yxatdan o'ting
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center text-[25px]">Ro'yxatdan o’tish</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Ism" /></div>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Familya" /></div>
                      <div className=""><FaPhone className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Telfon raqam" /></div>
                      <div className=""><IoMdMailUnread className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Email" /></div>
                      <Button className="bg-orange-500 w-full mt-5 text-center font-bold text-[15px]">Ro'yxatdan o'tish</Button>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 - IMAGE */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={youngAdults}
              alt="Young Adults"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Young Adults jamiyatiga qo‘shiling!</h1>
                <p className="text-xl max-w-xl mb-6">Yoshlar uchun zamonaviy ta’lim platformasi.</p>
                <Dialog>
                  <DialogTrigger>
                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-xl">
                      Ro'yxatdan o'ting
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center text-[25px]">Ro'yxatdan o’tish</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Ism" /></div>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Familya" /></div>
                      <div className=""><FaPhone className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Telfon raqam" /></div>
                      <div className=""><IoMdMailUnread className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Email" /></div>
                      <Button className="bg-orange-500 w-full mt-5 text-center font-bold text-[15px]">Ro'yxatdan o'tish</Button>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )   
}
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
import { useTranslation } from 'react-i18next';

import video from "../../assets/massiv.mp4";



export const Hero = () =>   {
  const { t } = useTranslation();

  return(
    <div className="relative mt-10">
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-[80vh]"
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            <div className=" bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("heroTitle1")}</h1>
                <p className="text-xl max-w-xl mb-6">{t("heroTitle2")}</p>
                <Dialog>
                  <DialogTrigger>
                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-xl">
                      {t("signup")}
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center text-[25px]">{t("signup")}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Ism" /></div>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Familya" /></div>
                      <div className=""><FaPhone className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Telfon raqam" /></div>
                      <div className=""><IoMdMailUnread className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Email" /></div>
                      <Button className="bg-orange-500 w-full mt-5 text-center font-bold text-[15px]">{t("signup")}</Button>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={youngAdults}
              alt="Young Adults"
              className="w-full h-full object-cover"
            />
            <div className=" bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-6 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("heroTitle3")}</h2>
                <p className="text-xl max-w-xl mb-6">{t("heroTitle4")}</p>
                <Dialog>
                  <DialogTrigger>
                    <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold text-xl">
                      {t("signup")}
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center text-[25px]">{t("signup")}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Ism" /></div>
                      <div className=""><IoPersonSharp className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Familya" /></div>
                      <div className=""><FaPhone className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Telfon raqam" /></div>
                      <div className=""><IoMdMailUnread className="relative left-2 top-7 mt-2" size={20} /><Input className="pl-10" placeholder="Email" /></div>
                      <Button className="bg-orange-500 w-full mt-5 text-center font-bold text-[15px]">{t("signup")}</Button>
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
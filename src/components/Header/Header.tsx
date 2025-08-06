import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { navItems } from "@/constants/SidebarMenu";
import { FaBars } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../../assets/photo_2025-07-28_10-42-28.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
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
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [lang,setLang ] = useState("ru");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  
  const flags: Record<string, string> = {
    uz: "https://flagcdn.com/w40/uz.png",
    en: "https://flagcdn.com/w40/gb.png",
    ru: "https://flagcdn.com/w40/ru.png",
  }

  const navItems = [
    { label: t("headerTitle1"), path: "/" },
    { label: t("headerTitle2"), path: "/about" },
    { label: t("headerTitle3"), path: "/courses" },
    { label: t("headerTitle4"), path: "/staff" },
    { label: t("headerTitle5"), path: "/services" },
  ];


  return (
   <section className="bg-gradient-to-r from-orange-50 to-white backdrop-blur-md pt-4">
        <div className=" bg-green-900 flex justify-between items-center">
            <div className="bg-[#FF6900] max-w-100 p-3 flex items-center gap-5">
              <span className="text-white text-[12px] font-bold uppercase">{t("socialMedia")}</span>
              <div className="flex gap-2">
                 <a href=""> <FaTelegram  size={25} color="" /> </a>
                 <a href=""> <CiFacebook  size={25} color="" /> </a>
                 <a href=""> <RiInstagramFill size={25} color="" /> </a>
              </div>
            </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6900] p-1 rounded-2xl"> <SiGmail />  </div>
                <a className="text-white font-bold mr-10" href="">youngadults@gmail.com</a>
              </div>
        </div>
       <header className=" shadow-md sticky top-0 z-50 p-3">
      <div className="container  mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/#"
          className="flex items-center gap-2 cursor-pointer" 
        >
          <img src={logo} width={150} height={50} alt="logo" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems?.map((item,index) => (
            <a key={index}
              href={item.path}
              className="text-black font-medium hover:text-orange-500 transition duration-200"
            >
              {item.label}
            </a>
          ))}

        <Dialog>
          <DialogTrigger>
            <button className="bg-orange-500 hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:cursor-pointer">
              {t("signup")}
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



         <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className=" border-2 border-solid border-orange-400 focus:border-orange-400 focus:ring-0 data-[state=open]:border-orange-400">
            <img
                src={flags[lang]}
                alt={lang.toUpperCase()}
                className="w-5 h-4 object-cover"
              />
              <span className="uppercase">{lang}</span>
            </SelectTrigger>
            <SelectContent className="min-w-[2rem]">
              <SelectItem value="uz" className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/uz.png" alt="UZ" className="w-5 h-4 object-cover" />
                UZ
                </SelectItem>
              <SelectItem value="en" className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-4 object-cover" />
                EN
                </SelectItem>
              <SelectItem value="ru" className="flex items-center gap-2">
              <img src="https://flagcdn.com/w40/ru.png" alt="RU" className="w-5 h-4 object-cover" />
                RU
                </SelectItem>
            </SelectContent>
          </Select>

        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 text-2xl"
        >
          <FaBars />
        </button>
        
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 mt-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-black font-medium hover:text-orange-500 transition duration-150 "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
  
    </header>
   </section>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/constants/SidebarMenu";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo_ya-coloured-black.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang,setLang ] = useState("uz");
  
  const flags: Record<string, string> = {
    uz: "https://flagcdn.com/w40/uz.png",
    en: "https://flagcdn.com/w40/gb.png",
    ru: "https://flagcdn.com/w40/ru.png",
  }

  return (
    <header className="bg-gradient-to-r from-orange-50 to-white backdrop-blur-md shadow-md sticky top-0 z-50 p-3">
      <div className="container  mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/#"
          className="flex items-center gap-2 cursor-pointer" 
        >
          <img src={logo} width={100} alt="" />
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
        
        <button className="bg-orange-500 hover:bg-blue-900 text-white font-semibold px-5 py-2 rounded-full transition duration-200 hover:cursor-pointer">
          Ro'yxatdan o'tish
        </button>

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
  );
};

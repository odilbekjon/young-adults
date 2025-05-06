import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "@/constants/SidebarMenu";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo_ya-coloured-black.svg";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-orange-500 text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-50 to-white px-4 pb-4">
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

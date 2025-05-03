import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "@/constants/SidebarMenu";
import { FaBars } from "react-icons/fa";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-orange-50 to-white backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl font-bold text-blue-900">Young Adults</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems?.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-blue-900 font-medium hover:text-orange-500 transition duration-200"
            >
              {item.label}
            </Link>
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
              className="block py-2 text-blue-900 font-medium hover:text-orange-500 transition duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};


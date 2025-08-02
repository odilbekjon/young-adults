import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/photo_2025-07-28_10-42-28.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d1f29] text-white pt-10 pb-6 px-4 md:px-10">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10">
        <div>
          <a className="mb-10 block" href="#">
            <img className="" src={logo} width={150} height={50} alt="logo" />
          </a>
          <p className="text-sm text-gray-400">
            IT va Ingliz tili bo'yicha mukammal ta'lim platformasi.
            Zamonaviy bilimlar bilan kelajagingizni quramiz.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">IT Kurslar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Kompyuter savodxonligi</a></li>
            <li><a href="#">Frontend dasturlash</a></li>
            <li><a href="#">Backend dasturlash</a></li>
            <li><a href="#">Foundation kurs</a></li>
            <li><a href="#">Co-working hudud</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Ingliz Tili</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="">IELTS</a></li>
            <li><a href="">CEFR</a></li>
            <li><a href="">Ingliz tili grammatikasi</a></li>
            <li><a href="">Mock Imtihonlari</a></li>
            <li><a href="">Ona Tili (Milliy sertifikat)</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Foydali Bo'limlar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about">Bosh sahifa</a></li>
            <li><a href="#about">Biz haqimizda</a></li>
            <li><a href="#">Xodimlar</a></li>
            <li><a href="#courses"> Kurslar</a></li>
            <li><a href="#">Xizmatlar</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Aloqa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="#">youngadultsstudy@gmail.com</a></li>
            <li>Tel: <a href="#"> +998 91-578-59-30</a></li>
            <li>Manzil: Surxondaryo viloyati, Jarqurg'on tumani, Qorayantoq MFY</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mt-5 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        <div className="flex space-x-4 text-xl text-gray-400">
          <a href="#"> <FaYoutube className="hover:text-red-500 cursor-pointer" /></a>
          <a href="#"><FaLinkedin className="hover:text-blue-400 cursor-pointer" /></a>
          <a href="#"><FaDiscord className="hover:text-indigo-400 cursor-pointer" /></a>
          <a href="#"><FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
          <a href="https://www.instagram.com/youngadultsstudy/"><FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
        </div>
        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Young Adults. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

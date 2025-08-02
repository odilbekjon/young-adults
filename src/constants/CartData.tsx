import React from 'react'; // ba'zida kerak bo‘ladi, lekin yangi versiyalarda emas

import {
  FaNewspaper,
  FaHome,
  FaGift,
  FaMedal,
} from "react-icons/fa";

interface CardItem {
  icon: React.ReactNode,
  title: string;
  description: string;
}

export const CardData: CardItem[] = [
  {
    icon: <FaNewspaper size={32} />,
    title: "So‘ngi yangiliklar",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaHome size={32} />,
    title: "Ochiq eshiklar kuni",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaGift size={32} />,
    title: "Aksiyalar",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaMedal size={32} />,
    title: "Yutuqlarimiz",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];
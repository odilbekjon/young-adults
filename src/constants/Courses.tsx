import computer from "../assets/computer.png";
import frontend from "../assets/front-end.png";
import backend from "../assets/backend.png";
import foundation from "../assets/foundation.png";
import ielts from "../assets/IELTS.jpg";
import cefr from "../assets/cefr.png";
import grammar from "../assets/grammar.jpg";
import onatili from "../assets/onatili.jpg";

import odilbek from "../assets/odilbek.jpg";
import behruz from "../assets/behruzbek.jpg";
import rasulbek from "../assets/rasulbek.jpg";
import laziza from "../assets/laziza.jpg";

export const CoursesData = [
  {
    id: 1,
    image: computer,
    name: "Kompyuter savodxonligi",
    teacher: 'Behruzbek Mansurov',
    teacherImage: behruz,
    description:
      "Kompyuter savodxonligi — foydalanuvchining kompyuter qurilmalari, dasturiy ta'minot va internet texnologiyalaridan maqsadga muvofiq, xavfsiz va mustaqil foydalana olish darajasidir.",
    time:'2 soat'
  },
  {
    id: 2,
    image: frontend,
    name: "Frontend dasturlash",
    teacher:'Odilbek Safarov',
    teacherImage: odilbek,
    description:
      "Frontend dasturlash — bu foydalanuvchi ko‘radigan va o‘zaro muloqot qiladigan veb-sayt yoki ilovaning tashqi ko‘rinishini (interfeysini) yaratish jarayonidir. Bunga dizaynni kodga aylantirish, elementlar joylashuvi, interaktiv tugmalar, menyular, formalar va animatsiyalar kiradi.",
    time:'2 soat'
  },
  {
    id: 3,
    image: backend,
    name: "Backend dasturlash",
    teacher:'Rasulbek Hamdamov',
    teacherImage: rasulbek,
    description:
      "Backend dasturlash — bu veb-sayt yoki ilovaning server tomonini dasturlash jarayonidir.Bu ma’lumotlar bazasi, server, va APIlar bilan ishlaydigan, foydalanuvchi so‘rovlariga javob beradigan dasturlash. Hamda foydalanuvchi ko‘rmaydigan, ammo tizimning ishlashi uchun muhim bo‘lgan qism.",
    time:'2 soat'
  },
  {
    id: 4,
    image: foundation,
    name: "Foundation kursi",
    teacher:'Odilbek Safarov',
    teacherImage: odilbek,
    description:
      "Foundation kursi — bu dasturlashni o‘rganishni istaganlar uchun mo‘ljallangan boshlang‘ich (asosiy) kurs bo‘lib,bunda noldan boshlovchilar uchun mo‘ljallangan kurs bo‘lib, u dasturlashga kirish, asosiy mantiq va kod yozish ko‘nikmalarini beradi. Shuningdek kompyuter, algoritm, kod yozish, va dasturlash tillarining asosiy tushunchalari o‘rgatiladi..",
    time:'2 soat'
  },
  {
    id: 5,
    image: ielts,
    name: "IELTS",
    teacher:'Rasulbek Hamdamov',
    teacherImage: rasulbek,
    description:
      "IELTS (International English Language Testing System) — bu xalqaro miqyosda tan olingan ingliz tili imtihoni bo‘lib, u ingliz tilini o‘qish, yozish, tinglash va gapirish bo‘yicha bilimingizni baholaydi.",
    time:'2 soat'
  },
  {
    id: 6,
    image: cefr,
    name: "CEFR",
    teacher: 'Behruzbek Mansurov',
    teacherImage: behruz,
    description:
      "CEFR (Common European Framework of Reference for Languages) — bu xorijiy tillardagi til bilish darajalarini baholash uchun ishlatiladigan xalqaro standart tizim.",
    time:'2 soat'
  },
  {
    id: 7,
    image: grammar,
    name: "Ingliz tili grammatikasi",
    teacher:'Laziza Tolibjonova',
    teacherImage: laziza,
    description:
      "Ingliz tili grammatikasi — bu ingliz tilida to‘g‘ri gap tuzish, so‘zlarni o‘zaro bog‘lash va fikrni aniq ifodalash uchun qo‘llaniladigan qoidalar to‘plami.",
    time:'2 soat'
  },
  {
    id: 8,
    image: onatili,
    name: "Ona Tili (Milliy sertifikat)",
    teacher:'Laziza Tolibjonova',
    teacherImage: laziza,
    description:
      "Milliy sertifikat — bu O‘zbekiston Respublikasi fuqarolari uchun o‘zbek tilidan bilim darajasini baholaydigan rasmiy imtihon va hujjat bo‘lib, O‘zbek tili bo‘yicha rasmiy til bilimini tasdiqlaydi.",
    time:'2 soat'
  },
];

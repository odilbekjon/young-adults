const Achievements = () => {
  return (
    <div className="w-full px-6 md:px-20 py-16 bg-white text-[#333] text-[1.1rem]">
      {/* Investitsiya va Sharoitlar */}
      <section className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#023e8a]">Investitsiya va Sharoitlar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#f77f00]">
            <li>Umumiy qiymati 1.5 mlrd. so'mlik jihozlar o'rnatilgan.</li>
            <li>O'quvchilarga qo'llanma uchun kitob ishlab chiqarilishi uchun Xitoydan 5000$ qiymatida asbob uskunalar olib kelindi.</li>
            <li>2023 yil noyabrdan 50 mln so'mlik o'quv materiallari ishlab chiqarildi.</li>
          </ul>
          <div className="grid grid-cols-2 gap-5">
            <img src="/public/office.jpg" alt="Office" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="/public/interior.jpg" alt="Interior" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="/public/meeting.jpg" alt="Meeting" className="rounded-xl shadow-lg w-full object-cover" />
            <img src="/public/coworking.jpg" alt="Coworking" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Natijalar va Statistika */}
      <section className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#023e8a]">Natijalar va Statistika</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#f77f00]">
            <li>O'zbekistonda talaba bo'lganlar: <strong className="text-[#f77f00]">3 300 nafar</strong></li>
            <li>Xorijda o'qiyotganlar: <strong className="text-[#f77f00]">500 nafar</strong></li>
            <li>Koreyada: 300, Polshada: 80, Latviya: 55, Italiya: 30</li>
            <li>Germaniya: 15, Angliya: 8, Boshqa: 12</li>
          </ul>
          <div className="bg-white shadow-xl p-8 rounded-xl text-center space-y-4">
            <p className="text-2xl font-semibold text-[#007f5f]">Dunyo bo'ylab bitiruvchilar</p>
            <p className="text-5xl font-bold text-[#007f5f]">5,100+</p>
            <p className="text-gray-700 text-xl">OTM va Xorijiy Universitet talabalari</p>
          </div>
        </div>
      </section>

      {/* IELTS va O‘sish */}
      <section className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#023e8a]">IELTS va O'sish Ko'rsatkichlari</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5 text-xl">
            <p><strong className="text-[#f77f00]">2800</strong> nafar IELTS sertifikat olgan</p>
            <p><strong className="text-[#f77f00]">900</strong> nafar maktab o'quvchilari</p>
            <p><strong className="text-[#f77f00]">150</strong> nafar tashkilot xodimlari</p>
          </div>
          <img src="/public/young_adults_growth_chart.png" alt="Growth Chart" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Xorijdagi Universitetlar */}
      <section className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#023e8a]">Xorijdagi Nufuzli Universitetlar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#f77f00]">
            <li>Soonchunhyang Universiteti, Janubiy Koreya</li>
            <li>Vistula Universiteti, Polsha</li>
            <li>IUBH Menejment, Germaniya</li>
            <li>University of Pennsylvania, AQSH</li>
            <li>University of Birmingham, Angliya</li>
            <li>University of Rome Tor Vergata, Italiya</li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {['germany', 'latvia', 'hungary', 'poland', 'korea', 'italy'].map((flag) => (
              <img
                key={flag}
                src={`/public/images/${flag}.png`}
                alt={flag}
                className="w-16 h-12 md:w-20 md:h-14 rounded shadow-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kelajakdagi Rejalar */}
      <section className="mb-16 bg-[#fffdf6] p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#023e8a]">Kelajakdagi Rejalar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img src="/public/youngAdults.png" alt="Future University" className="rounded-xl shadow-md w-full object-cover" />
          <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#f77f00]">
            <li>2025-2027 yillari 7000 o'rinli universitet tashkil etiladi</li>
            <li>4ta fakultet: IT, Ingliz tili, Biznes, Buxgalteriya</li>
            <li>Ishchilar soni 60 taga yetkaziladi</li>
            <li>Xalqaro darajada maqom olish rejalashtirilgan</li>
            <li>Dasturiy loyihalar soni va eksport xizmatlari 2 barobarga oshiriladi</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Achievements;

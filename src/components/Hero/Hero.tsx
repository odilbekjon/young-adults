export const Hero = () =>   {
  return(
    <div className="bg-gradient-to-br from-orange-50 to-white px-6 py-12 ">
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-snug">
                Xush kelibsiz <span className="text-orange-500">Young Adults</span>
            </h1>
            <p className="max-w-4xl text-center mx-auto text-lg md:text-xl text-gray-700 mb-8">
                Kelajagingizni biz bilan birga bunyod qiling — <strong>IT</strong> va <strong>Ingliz tili</strong> bo‘yicha eng sifatli darslar sizni kutmoqda.
                Bilim olishga chanqoq yoshlar jamiyatiga qo‘shiling va ko‘nikmalaringizni yangi bosqichga olib chiqing!
            </p>
            <button
              className="mt-3 bg-orange-500 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-full"
            >  
              Hoziroq ro'yxatdan o'ting
            </button>
        </div>
    </div>
  )   
}
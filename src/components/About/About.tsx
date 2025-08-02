
// images
import img1 from "../../assets/about-img.png";
import img2 from "../../assets/about-image2.png";
import img3 from "../../assets/aboiut-image3.png";
import img4 from "../../assets/customer-service.svg";
import img5 from "../../assets/youngAdults.jpg";

export const About = () => (
  <div
    id="about"
    className="bg-gradient-to-br px-6 py-12 mx-auto"
  >
    <div className="container">
      <div className="">
        <h1 className="text-center lg:text-[50px] text-[30px] font-bold">Biz haqimizda</h1>
      </div>

      <div  className="flex flex-wrapp gap-50 mt-10">
          <div className="left grid grid-cols-2">
              <img src={img1} width={'340'} height={'500'} alt="image" />
              <img className="ml-5" src={img2} width={'315'} height={'315'} alt="image" />
              <div className="w-[220px] h-[80px] flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-tl-full rounded-tr-full rounded-br-full shadow-md transition-all">
                <img className="bg-white p-1 rounded-full" src={img4} width={50} height={50}  alt="person" />
                <span className="font-bold">Telegram orqali savol  yolash</span>
              </div>
              <img className="ml-10 mt-[-80px]" src={img3} width={'340'} height={'345'} alt="image" />
          </div>
          <div className="right ">
            <h2 className="max-w-[831px] text-[40px] font-bold leading-[57px]">Young Adults – bilim, ishonch va muvaffaqiyat <span className="text-orange-500">markazi!</span> </h2>
            <p className="max-w-[767px] mt-5">🎓 Young Adults o‘quv markazi 2017-yilda tashkil etilgan bo‘lib, hozirgi kunga kelib 3 ta filial va 1 ta zamonaviy IT markaziga ega. Markazimiz bugunga qadar <b className="text-orange-500">5000</b> dan ortiq bitiruvchini yetishtirib, tumandagi yagona yirik qo‘shimcha ta’lim muassasasi sifatida tan olingan. Hozirda <b className="text-orange-500">1300</b> dan ortiq o‘quvchi tahsil olmoqda va ular orasida 80% dan ziyodi ingliz tilidan B2 yoki undan yuqori natijalarga erishgan. Shuningdek, 500 dan ortiq bitiruvchilarimiz dunyoning eng nufuzli — top <b className="text-orange-500">1000</b> talik oliygohlarida o‘qishni davom ettirishmoqda.</p>
          <div className="mt-10 flex gap-5 items-center">
            <img className="rounded-[50%]" src={img5} width={50} alt="Yong-Adults" />
              <div className="">
                <span className="font-bold text-[20px]">Yigitali Abdullayev</span>
                <p className="max-w-[200px] opacity-[0.7]">Young Adults asoschisi va bosh ilhomlantiruvchi</p>
              </div>
          </div>
          </div>
      </div>
      
    </div>
  </div>
);

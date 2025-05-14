import { FaTelegram, FaInstagramSquare, FaFacebook, FaYoutube, FaTwitterSquare } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => (
  <div className="bg-gradient-to-br from-orange-50 to-white px-4 py-12">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10">
        Biz bilan bog'laning
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800">Biz bilan bog'laning</h2>
          <p className="text-gray-700 mb-6 max-w-lg text-base sm:text-lg leading-relaxed">
            Agar sizda savollar bo'lsa yoki kurslarimiz haqida batafsil ma'lumot
            olishni istasangiz, iltimos quyidagi forma orqali bizga murojaat qiling.
            Siz bilan imkon qadar tezroq bog'lanamiz.
          </p>

          <div className="flex gap-4">
            <FaTelegram size={30} className="text-blue-600 hover:scale-110 transition" />
            <FaInstagramSquare size={30} className="text-pink-500 hover:scale-110 transition" />
            <FaFacebook size={30} className="text-blue-800 hover:scale-110 transition" />
            <FaYoutube size={30} className="text-red-600 hover:scale-110 transition" />
            <FaTwitterSquare size={30} className="text-sky-500 hover:scale-110 transition" />
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <Label htmlFor="email" className="text-base font-semibold text-gray-800">
                Emailingizni kiriting
              </Label>
              <Input id="email" placeholder="email@example.com" className="mt-2 border-orange-400" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="phone" className="text-base font-semibold text-gray-800">
                Telefon raqamingizni kiriting
              </Label>
              <Input id="phone" placeholder="+9989" className="mt-2 border-orange-400" />
            </div>
          </div>

          <div className="mt-5">
            <Label htmlFor="message" className="text-base font-semibold text-gray-800">
              O'z fikringizni qoldiring
            </Label>
            <Textarea
              id="message"
              placeholder="Fikringizni shu yerga yozing..."
              className="mt-2 border-orange-400 resize-none h-32"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

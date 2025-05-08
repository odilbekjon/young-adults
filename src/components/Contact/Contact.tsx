import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
// 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"


export const Contact = () => (
  <div className="bg-gradient-to-br from-orange-50 to-white  px-6 py-12 mx-auto">
    <div className="container">
        <h1 className="text-center text-[40px] font-bold">Biz bilan bog'laning</h1>

        <div className="flex flex-wrap justify-between mt-10 ">
            <div className="left">
                <h2 className="text-3xl font-bold mb-4">
                Biz bilan bog‘laning
                </h2>
                <p className=" text-gray-600 mb-8 max-w-[400px]">
                Agar sizda savollar bo‘lsa yoki kurslarimiz haqida batafsil ma’lumot
                olishni istasangiz, iltimos quyidagi forma orqali bizga murojaat
                qiling. Siz bilan imkon qadar tezroq bog‘lanamiz.
                </p>
            <div className="flex gap-5">
                <FaTelegram size={35} />
                <FaInstagramSquare size={35} />
                <FaFacebook size={35} />
                <FaYoutube size={35} />
                <FaTwitterSquare size={35} />
            </div>
            </div>
            <div className="right lg:mt-0 mt-10">
                <div className="flex flex-wrap gap-5">
                    <div className="flex flex-col">
                        <Label className="text-[20px] font-bold" htmlFor="email">Emailingizni kiriting</Label>
                        <Input id="name" className="w-full border-2 border-solid border-orange-400 mt-3" placeholder="name" />
                    </div>
                     <div className="flex flex-col">
                        <Label className="text-[20px] font-bold"  htmlFor="email">Telfon raqamingizni kiriting</Label>
                        <Input id="name" className="w-full border-2 border-solid border-orange-400 mt-3" placeholder="+9989" />
                    </div>
                </div>
                <div className="mt-3">
                    <Label className="text-[20px] font-bold"  htmlFor="email">O'z fikiringizni qoldiring</Label>
                    <Textarea  className=" border-2 border-solid border-orange-400 h-30 mt-2 resize-none" placeholder="description" />
                </div>
            </div>
        </div>
    </div>
  </div>
);

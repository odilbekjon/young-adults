import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const achievements = [
  "Bugunga qadar 5000+ bitiruvchilar",
  "Tumandagi yagona qo'shimcha ta'lim markazi",
  "Hozirda 1300+ o'quvchi tahsil olmoqda",
  "80%+ ingliz tilidan B2 va undan yuqori natijalar",
  "500+ bitiruvchilar xalqaro TOP 1000 universitetlarda",
  "Young Adults xalqaro xususiy universitetga aylanish yo'lida",
];

const studentStats = [
  { name: "O'zbekiston", value: 3300 },
  { name: "Jan. Koreya", value: 300 },
  { name: "Polsha", value: 80 },
  { name: "Latviya", value: 55 },
  { name: "Italiya", value: 30 },
  { name: "Germaniya", value: 15 },
  { name: "Angliya", value: 8 },
  { name: "Boshqa", value: 12 },
];

const results = [
  { year: "2017", students: 80 },
  { year: "2018", students: 120 },
  { year: "2019", students: 200 },
  { year: "2020", students: 300 },
  { year: "2021", students: 400 },
  { year: "2022", students: 500 },
  { year: "2023", students: 600 },
  { year: "2024", students: 700 },
];

export const Achievements: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
        Yutuqlar va Fikrlar
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, idx) => (
          <Card key={idx} className="bg-white shadow border p-4">
            <CardContent className="text-gray-800 font-medium text-sm">
              <span className="text-orange-500 mr-2">✔</span>
              {item}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <Card>
          <CardTitle className="p-4 text-lg font-semibold">
            Chet el universitetlarida tahsil olayotgan bitiruvchilar
          </CardTitle>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studentStats}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <Card>
          <CardTitle className="p-4 text-lg font-semibold">
            Yillik o'quvchilar statistikasi
          </CardTitle>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={results}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card className="bg-white shadow border p-6">
          <CardTitle className="text-lg font-semibold mb-2">
            IT Park Rezidentligi
          </CardTitle>
          <CardContent className="text-sm text-gray-700">
            Young Adults 2023 yil dekabrdan boshlab IT Park rezidenti sifatida faoliyat yuritmoqda.
          </CardContent>
        </Card>

        <Card className="bg-white shadow border p-6">
          <CardTitle className="text-lg font-semibold mb-2">
            Yangi IT Markazi
          </CardTitle>
          <CardContent className="text-sm text-gray-700">
            250 o'quvchiga mo'ljallangan, kutubxona, kafeterya va co-working zonalari bilan jihozlangan yangi markaz qurildi. Qurilish qiymati 6 milliard so‘mni tashkil etdi.
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
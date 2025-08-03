import { useState } from "react";
import { CoursesData } from "@/constants";
import { FaClock } from "react-icons/fa6";

export const Courses = () => {
    const maxLength = 180;
    const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

    const toggleShowMore = (id: number) => {
        setExpandedCourses(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div id="courses" className=" px-6 py-12 mx-auto">
            <div className="container">
                <h1 className="text-center lg:text-[50px] text-[30px] font-bold text-orange-500 mb-10">Kurslarimiz</h1>
                <div className="flex flex-wrap gap-10">
                    {
                        CoursesData?.map(course => {
                            const isExpanded = expandedCourses[course.id];
                            const isLong = course.description.length > maxLength;
                            const displayedText = isExpanded
                                ? course.description
                                : course.description.slice(0, maxLength) + (isLong ? "..." : "");

                            return (
                                <div key={course.id} className="shadow-lg border-2 border-solid border-orange-500 rounded-2xl p-4 max-w-[400px] h-full flex flex-wrap flex-col justify-center mx-auto">
                                    <img className="course-image" src={course.image} width={200} height={200} alt={course.name} />
                                    <h2 className="text-[25px] font-bold my-5">{course.name}</h2>

                                    <div className="flex items-center gap-10">
                                        <div className="flex items-center gap-5">
                                            <img className="rounded-full" width={50} height={50}  src={course.teacherImage} alt="teacher" />
                                            <span className="">{course.teacher}</span>
                                        </div>

                                        {isLong && (
                                            <button
                                                onClick={() => toggleShowMore(course.id)}
                                                className="my-2 text-left px-4 py-2 bg-gray-400 rounded-2xl text-white"
                                            >
                                                {isExpanded ? "Yopish" : "Ko'proq"}
                                            </button>
                                        )}
                                    </div>

                                    <p className="max-w-[450px] my-3">{displayedText}</p>
                                    <span className="mb-2 flex items-center gap-3"><FaClock size={20} color="#156C63" /> Davomiylgi: <b className="text-[#156C63]">{course.time}</b></span>


                                    <div className="bg-[#FF6900] p-2 text-white rounded-2xl text-center text-[20px] font-bold mt-auto hover:cursor-pointer">
                                        Kursga yozilish
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

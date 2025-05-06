import { useState } from "react";
import { CoursesData } from "@/constants";

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
        <div id="courses" className="bg-gradient-to-br from-orange-50 to-white px-6 py-12 mx-auto">
            <div className="container">
                <h1 className="text-center text-[50px] font-bold">Bizning kurslar</h1>
                <div className="flex flex-wrap gap-10">
                    {
                        CoursesData?.map(course => {
                            const isExpanded = expandedCourses[course.id];
                            const isLong = course.description.length > maxLength;
                            const displayedText = isExpanded
                                ? course.description
                                : course.description.slice(0, maxLength) + (isLong ? "..." : "");

                            return (
                                <div key={course.id} className="shadow-lg shadow-orange-400 rounded-2xl p-4 max-w-[400px] h-full flex flex-col">
                                    <img className="course-image" src={course.image} width={400} height={200} alt={course.name} />
                                    <h2 className="text-[25px] font-bold my-5">{course.name}</h2>
                                    <p className="max-w-[450px]">{displayedText}</p>

                                    {isLong && (
                                        <button
                                            onClick={() => toggleShowMore(course.id)}
                                            className="text-blue-600 my-2 text-left"
                                        >
                                            {isExpanded ? "Yopish" : "Davomini o‘qish"}
                                        </button>
                                    )}

                                    <div className="bg-orange-400 p-4 text-white rounded-2xl text-center text-[20px] font-bold mt-auto hover:cursor-pointer">
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

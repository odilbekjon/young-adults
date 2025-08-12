// Data.js
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaMapMarkerAlt } from 'react-icons/fa';

export const data = [
  {
    icon: <FaUserGraduate className="text-white text-4xl sm:text-5xl lg:text-7xl" />,
    count: 5000,
    label: 'Bitiruvchilar soni',
  },
  {
    icon: <FaUsers className="text-white text-4xl sm:text-5xl lg:text-7xl" />,
    count: 1345,
    label: "O'quvchilar soni",
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-4xl sm:text-5xl lg:text-7xl" />,
    count: 31,
    label: "O'qituvchilar soni",
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-4xl sm:text-5xl lg:text-7xl" />,
    count: 4,
    label: 'Filiallar soni',
  },
];

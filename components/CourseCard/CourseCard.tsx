import { FaClock, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  instructorImage: string;
  lesson: string;
  time: string;
  location: string;
  courseDetails: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  instructorImage,
  lesson,
  time,
  location,
  courseDetails
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
      {/* Encabezado */}
      <h2 className="text-2xl font-bold text-gray-900">Improve your skill with Coursea!</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      {/* Tarjeta de Curso */}
      <div className="bg-gray-800 text-white rounded-lg mt-6 p-6 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <button className="mt-4 bg-gray-700 p-3 rounded-lg text-white flex items-center">
            ▶ Play
          </button>
        </div>
        <img
          src={instructorImage}
          alt="Instructor"
          className="w-40 h-40 rounded-full object-cover ml-6"
        />
      </div>

      {/* Detalles del Curso */}
      <div className="mt-4 flex items-center text-gray-700 text-sm space-x-4">
        <FaBookOpen className="text-red-500" /> <span>{lesson}</span>
        <FaClock className="text-red-500" /> <span>{time}</span>
        <FaMapMarkerAlt className="text-red-500" /> <span>{location}</span>
      </div>

      {/* Descripción */}
      <h3 className="text-lg font-bold mt-4">About Course</h3>
      <p className="text-gray-600 text-sm mt-2">{courseDetails}</p>
    </div>
  );
};

export default CourseCard;
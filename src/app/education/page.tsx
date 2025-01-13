import { FaGraduationCap, FaCode, FaCertificate, FaUserGraduate } from 'react-icons/fa'; // Adding icons for better design

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">My Education Journey</h1>
      
      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 flex items-center">
          <FaGraduationCap className="mr-3 text-orange-500" />
          Education
        </h2>
        <ul className="list-disc pl-5 mt-4 text-lg text-gray-700">
          <li>
            <strong>Bachelor of Science in Computer Science</strong>
            <br />
            University of Virtual University
          </li>
          <li>
            <strong>Intermediate in Commerce</strong>
            <br />
            Gov. Girls Women College
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 flex items-center">
          <FaCode className="mr-3 text-blue-500" />
          Skills Acquired
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          <span className="font-bold">Technologies:</span> JavaScript, React, Next.js, TypeScript, HTML, CSS
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 flex items-center">
          <FaCertificate className="mr-3 text-green-500" />
          Certifications
        </h2>
        <ul className="list-disc pl-5 mt-4 text-lg text-gray-700">
          <li>Full-Stack Development Certification - XYZ Institute, 2024</li>
          <li>Graphic Design Certification - ABC Academy, 2023</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-700 flex items-center">
          <FaUserGraduate className="mr-3 text-purple-500" />
          Extracurricular Activities
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Member of the Computer Science Club, Volunteer at Local Coding Bootcamp
        </p>
      </section>
    </div>
  );
}

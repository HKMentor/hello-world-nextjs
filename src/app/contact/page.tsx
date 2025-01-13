import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaShoppingCart } from "react-icons/fa"; // Importing icons

export default function Contact() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl text-center m-4 text-gray-800">
        Connect With Me!
      </h1>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold text-3xl text-orange-500 m-4">
          Get in Touch
        </h2>
        <p className="text-justify font-medium text-gray-700 text-lg m-4">
          If you have any questions or would like to collaborate, feel free to
          reach out! I am always open to new opportunities and would love to
          hear from you. You can contact me via email or connect with me on my
          social media accounts below.
        </p>

        <div className="space-y-6">
          {/* LinkedIn */}
          <p className="flex items-center text-lg text-gray-800">
            <FaLinkedin className="text-blue-500 text-2xl" />
            <span className="ml-3">
              <strong>LinkedIn:</strong>
              <Link
                href="https://www.linkedin.com/in/hooria-fatima-54753927b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-2"
              >
                Hooria Fatima LinkedIn
              </Link>
            </span>
          </p>

          {/* GitHub */}
          <p className="flex items-center text-lg text-gray-800">
            <FaGithub className="text-black text-2xl" />
            <span className="ml-3">
              <strong>GitHub:</strong>
              <Link
                href="https://github.com/HKMentor?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline ml-2"
              >
                Hooria GitHub
              </Link>
            </span>
          </p>

          {/* Instagram */}
          <p className="flex items-center text-lg text-gray-800">
            <FaInstagram className="text-pink-500 text-2xl" />
            <span className="ml-3">
              <strong>Instagram:</strong>
              <Link
                href="https://www.instagram.com/hooria_codehub?igsh=ZWhvMmVucm5ueHBl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline ml-2"
              >
                Hooria Code Hub
              </Link>
            </span>
          </p>

          {/* Email */}
          <p className="flex items-center text-lg text-gray-800">
            <FaEnvelope className="text-red-500 text-2xl" />
            <span className="ml-3">
              <strong>Email:</strong>
              <Link
                href="mailto:infohkmentor@gmail.com"
                className="text-red-500 hover:underline ml-2"
              >
                infohkmentor@gmail.com
              </Link>
            </span>
          </p>

          {/* E-commerce Website */}
          <p className="flex items-center text-lg text-gray-800">
            <FaShoppingCart className="text-green-500 text-2xl" />
            <span className="ml-3">
              <strong>My E-commerce Website:</strong>
              <Link
                href="https://www.hkdashdeals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline ml-2"
              >
                HK Dash Deals
              </Link>
            </span>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="./Login"   className="text-white bg-blue-500 px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 text-lg">
          
              Login
          </Link>
        </div>
      </div>
    </div>
  );
}

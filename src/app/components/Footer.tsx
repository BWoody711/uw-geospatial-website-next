import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    return (
    <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto text-center px-4 md:px-8">
          <div className="flex justify-center space-x-6">
            <p style={{cursor: "pointer"}} className="text-md transform transition duration-300 ease-in-out hover:scale-110">Follow our socials!</p>
            <a href="https://www.instagram.com/uwgeospatial" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transform transition duration-300 ease-in-out hover:scale-125">
              <FaInstagram size={24} />
            </a>
            <a href="https://discord.com/invite/EjuZmD4DJx" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transform transition duration-300 ease-in-out hover:scale-125">
              <FaDiscord size={24} />
            </a>
            <a href="https://www.facebook.com/uwgeospatial" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transform transition duration-300 ease-in-out hover:scale-125">
              <FaFacebook size={24} />
            </a>
          </div>
          <p className="mt-4 text-xs">Website created by Claire Reeves, Emily Reeves, and Ben Woodward.</p>
        </div>
      </footer>
    )
}
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
      <header className="bg-slate-800 text-white px-10 py-2">
        <div className="flex justify-between">
            <Link className="left-0 flex flex-row justify-center space-x-2 mb-0 transform transition duration-300 ease-in-out hover:scale-125" href="/">
                <Image 
                    src="https://bwoody711.github.io/uw-geospatial-website-next/uw_geospatial_logo.png"
                    width={25}
                    height={25}
                    alt="UW Geospatial Club logo"
                />
                <p className="text-l flex items-center">UW Geospatial</p>
            </Link>
            <div className="flex space-x-3">
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
        </div>
      </header>
    )
}
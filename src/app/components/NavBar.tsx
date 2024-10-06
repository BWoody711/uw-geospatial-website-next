'use client'

import { useState } from "react";

import DesktopLinks from "./Nav/DesktopLinks";
import MobileMenuButton from "./Nav/MobileMenuButton";
import MobileDrawer from "./Nav/MobileDrawer";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 text-slate-900 text-l font-semibold py-4">
      <div className="hidden relative py-4 sm:flex flex-col justify-center">
        <DesktopLinks />
      </div>
      <div className="sm:hidden relative py-6 flex flex-col justify-center ">
        <MobileMenuButton onClick={handleClick} />
        <MobileDrawer isOpen={isOpen} onClose={handleClick} />
      </div>
    </nav>
  );
};



{/* <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
<li><Link href="/opportunities" className="hover:text-gray-300">Opportunities</Link></li>
<li><Link href="/learn-gis" className="hover:text-gray-300">Learn GIS</Link></li>
<li><Link href="/map-gallery" className="hover:text-gray-300">Map Gallery</Link></li> */}
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
    isOpen: boolean
    onClose: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function MobileDrawer({ isOpen, onClose }: Props) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-3xl" icon={faXmark} />
        </button>
        <div className="flex flex-col justify-around items-center space-y-20">
          <Image 
              src="https://bwoody711.github.io/uw-geospatial-website-next/uw_geospatial_logo.png"
              width={75}
              height={75}
              alt="UW Geospatial Club logo"
              className="transform transition duration-300 ease-in-out hover:scale-110"
          />
          <ul className='text-center'>
              <li className="text-xl hover:text-slate-900 hover:font-semibold mb-2"><Link href="/">Home</Link></li>
              <li className="text-xl hover:text-slate-900 hover:font-semibold mb-2"><Link href="/opportunities">Opportunities</Link></li>
              <li className="text-xl hover:text-slate-900 hover:font-semibold mb-2"><Link href="/learn-gis/1">Learn GIS</Link></li>
              <li className="text-xl hover:text-slate-900 hover:font-semibold mb-2"><Link href="/map-gallery">Map Gallery</Link></li>
            {/* Add other navigation links */}
          </ul>
        </div>
      </div>
    );
  }
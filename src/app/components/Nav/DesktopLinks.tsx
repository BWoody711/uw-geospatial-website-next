import Link from "next/link"

export default function DesktopLinks() {
    return(
      <ul className="absolute left-0 flex flex-row space-x-10 sm:ml-10">
        <li className="transform transition duration-300 ease-in-out hover:scale-125 hover:underline"><Link href="/">Home</Link></li>
        <li className="transform transition duration-300 ease-in-out hover:scale-125 hover:underline"><Link href="/opportunities">Opportunities</Link></li>
        <li className="transform transition duration-300 ease-in-out hover:scale-125 hover:underline"><Link href="/learn-gis">Learn GIS</Link></li>
        <li className="transform transition duration-300 ease-in-out hover:scale-125 hover:underline"><Link href="/map-gallery">Map Gallery</Link></li>
      </ul>
    )
  }
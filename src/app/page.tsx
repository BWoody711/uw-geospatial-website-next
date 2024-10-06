import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image'

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'UW Geospatial',
  description: 'University of Waterloo\'s Geospatial Club'
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Image */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ height: 250, backgroundImage: "url('https://bwoody711.github.io/uw-geospatial-website-next/Contour-Map.svg')" }}
        
      >
        <Image 
            src="https://bwoody711.github.io/uw-geospatial-website-next/uw_geospatial_logo.png"
            width={125}
            height={125}
            alt="UW Geospatial Club logo"
            className="transform transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="text-center text-black">
          <h1 style={{
              cursor: "pointer",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.7)"
            }} 
            className="text-2xl sm:text-4xl font-bold my-4 transform transition duration-300 ease-in-out hover:scale-110"
          >UW Geospatial Club</h1>
        </div>
      </section>

      {/* NavBar */}
      <NavBar />

      {/* Main */}
      <main className="flex-grow">
        <div className="container mx-auto text-center py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Upcoming Events (1/4 width on larger screens) */}
            <div className="order-1 md:order-first md:col-span-3 text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <h4 className="text-1xl md:text-2xl font-bold mb-4">GIS Day!</h4>
              <p className="text-md md:text-lg text-gray-700 mb-2"><b>Date: </b>November 20th, 2024</p>
              <p className="text-md md:text-lg text-gray-700 mb-2"><b>Time: </b>1 - 4 PM</p>
              <p className="text-md md:text-lg text-gray-700 mb-2"><b>Location: </b>UW Geospatial Centre, Dana Porter Library</p>
              <p className="text-md md:text-lg text-gray-700 mb-2">
                This fall, UW Geospatial is working with the Geospatial Centre, Waterloo Association of Geography Students, and ETIS to organize 
                the University of Waterloo&apos;s GIS Day! This year&apos;s GIS Day will feature lightning talks, hands-on workshops about GeoAI and Geospatial Python, 
                and a cake and coffee social. We are currently accepting <a href="https://arcg.is/viuG" target='_blank'><u>lightning talks</u></a> and submissions for the event&apos;s <a href="https://arcg.is/4OaOu" target='_blank'><u>map gallery</u></a>.
                For more information about the event, visit the official <a href="https://uwaterloo.ca/environment-technology-instructional-support/gis-day" target='_blank'><u>UWaterloo GIS Day Website</u></a>.
              </p>
            </div>
            {/* Other Content */}
            <div className="order-2 md:col-span-9">
              <div className="text-left">
                <h2 className="text-xl md:text-4xl font-bold mb-4">Welcome to UW Geospatial Club</h2>
                <p className="text-md md:text-lg text-gray-700 mb-6">
                  At UW Geospatial, our goal is to help UWaterloo students learn GIS and remote sensing. We do this by holding in person workshops, 
                  creating and publishing learning resources, and maintaining a repository of the best GIS and remote sensing tutorials on the internet.
                  From basic to advanced, and from Esri to open source, we are here to help you at every step of your geospatial journey.
                </p>
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Opportunities</h2>
                <p className="text-md md:text-lg text-gray-700 mb-6">
                  There are many scholarships, competitions, and networking opportunities available for students who use GIS at Waterloo! Visit our <Link href="/opportunities"><u>opportunities</u></Link> page to learn more.
                </p>
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Learn GIS</h2>
                <p className="text-md md:text-lg text-gray-700 mb-4">
                  UW Geospatial has compiled some of the best GIS, Remote Sensing, and Geospatial Programming tutorials from around the internet to create geospatial learning pathways! 
                  Whether you are starting from scratch or trying to learn some new tricks, these pathways can help you at any part of your geospatial journey. 
                </p>
                <p className="text-md md:text-lg text-gray-700 flex justify-center mb-6">
                  <Link href="/learn-gis" className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 transform transition duration-300 ease-in-out hover:scale-110">Start Learning GIS!</Link>
                </p>
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Map Gallery</h2>
                <p className="text-md md:text-lg text-gray-700 mb-4">
                  We want to showcase UW&apos;s best cartographic talent! Submit your best static or web maps to us for a chance to have them featured on our 
                  socials, at UWaterloo&apos;s GIS Day, and in our <Link href="/map-gallery"><u>map gallery</u></Link>!
                </p>
                <p className="text-md md:text-lg text-gray-700 mb-6 flex justify-center">
                  <a href="https://arcg.is/4OaOu" target="_blank" className="px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 transform transition duration-300 ease-in-out hover:scale-110">Submit your Maps!</a>
                </p>
              </div>
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Join our Exec!</h2>
                <p className="text-md md:text-lg text-gray-700 mb-8">
                  UW Geospatial is always looking for keen folks to help us to create, market, and run our workshops, tutorials, and events! If you are interested in 
                  being involved, reach out or come to one of our events!
                </p>
                <div className="mb-4 sm:mb-8 grid grid-cols-12 sm:gap-2">
                  <div className="order-1 sm:order-1 col-span-12 sm:col-span-8 text-left">
                    <p><b>Fall 2024 Exec Team</b></p>
                  </div>
                  <div className="mt-4 sm:mt-0 order-4 sm:order-2 col-span-12 sm:col-span-4 text-left">
                    <p><b>Old People Who Help</b></p>
                  </div>
                  <div className="order-2 sm:order-3 col-span-12 sm:col-span-4 text-left">
                    <ul>
                      <li>Davin Bales</li>
                      <li>Teresa Dang</li>
                      <li>Sudiksha Desai</li>
                    </ul>
                  </div>
                  <div className="order-3 sm:order-4 col-span-12 sm:col-span-4 text-left">
                    <ul>
                      <li>David Oladejo</li>
                      <li>Timothy Tao</li>
                      <li>Brianna Tsoi</li>
                    </ul>
                  </div>
                  <div className="order-5 sm-order-5 col-span-12 sm:col-span-4 text-left">
                    <ul>
                      <li>Weronika Fydrych</li>
                      <li>Ben Woodward</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

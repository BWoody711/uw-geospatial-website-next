import type { Metadata } from 'next'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Map Gallery - UW Geospatial',
  description: 'University of Waterloo\'s Geospatial Club'
}

export default function MapGallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">This page is under construction.</h1>
          <p className="text-lg text-gray-700 mt-4">The map gallery will be live sometime after <a href="https://uwaterloo.ca/environment-technology-instructional-support/gis-day" target='_blank'><u>GIS Day</u></a> (November 20th).</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
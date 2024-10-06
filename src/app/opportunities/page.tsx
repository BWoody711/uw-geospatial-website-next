import type { Metadata } from 'next'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Opportunities - UW Geospatial',
  description: 'University of Waterloo\'s Geospatial Club'
}

export default function Opportunities() {
  return (
    <div className="relative min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow">
          <div className="container mx-auto text-center py-10 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <div className="text-left">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">UWaterloo ECCE</h2>
                  <p className="text-md md:text-lg text-gray-700 mb-8">
                    The University of Waterloo is an <a href="https://ecce.esri.ca/" target="_blank"><u>Esri Canada Centre of Excellence</u></a>. 
                    Esri Canada&apos;s ECCE program was founded in 2014 to foster innovation and collaboration in the GIS space. Each year, 
                    the University of Waterloo names <a href="https://uwaterloo.ca/environment-technology-instructional-support/esri-canada-gis-centre-excellence" target="_blank"><u>six (6) ECCE student associates</u></a>. ECCE students get an ArcGIS Developer Subscription, 
                    and are expected to contribute to the ECCE blog and participate in the Esri Canada App Challenge. 

                    Undergraduate and Graduate students in the Department of Geography and Environmental Management and School of Planning are 
                    eligible to be UWaterloo ECCE students. UWaterloo&apos;s ECCE student associates meet once per month to share knowledge and prepare 
                    for the Esri Canada App Challenge. Interested students who are not ECCE student associates are also welcome at these meetings.
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Esri Canada App Challenge</h2>
                  <p className="text-md md:text-lg text-gray-700 mb-8">
                    Each year during the Winter reading week, the University of Waterloo participates in the <a href="https://ecce.esri.ca/app-challenge/" target="_blank">
                    <u>Esri Canada App Challenge</u></a>. Each App Challenge has a theme, and teams of three students must build an innovative app that addresses that theme 
                    using Esri technology (e.g. ArcGIS Experience Builder, ArcGIS AppStudio, ArcGIS SDK for JavaScript, etc.). While ECCE student associates are expected 
                    to participate, non-student associates are also welcome and encouraged to join a team, as up to 12 UW students can participate 
                    each year. Waterloo has historically done quite well at the App Challenge, placing third in 2022, and second in 2023 and 2024.
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">National Geomatics Competition</h2>
                  <p className="text-md md:text-lg text-gray-700 mb-8">
                    The <a href="http://www.nationalgeomaticscomp.ca/" target="_blank"><u>National Geomatics Competition</u></a> (NGC) is a student-organized, geomatics-focused pitch competition held at a different 
                    Canadian university each year. Teams of three students are given a geomatics case study, and must develop and pitch a plan 
                    on how they would collect and analyze the necessary geospatial data to solve one or more problems. Waterloo has not participated 
                    in the NGC since 2019, when it hosted the competition.
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">GoGeomatics Networking Events</h2>
                  <p className="text-md md:text-lg text-gray-700 mb-8">
                    <a href="https://gogeomatics.ca/" target="_blank"><u>GoGeomatics</u></a> is Canada&apos;s top networking organization in the geospatial sector. 
                    The GoGeomatics website has job postings as well as articles on the state of the sector. In various cities including Kitchener-Waterloo, 
                    GoGeomatics holds monthly networking dinners for students and GIS professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}
import type { Metadata } from 'next'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// interface Resource {
//     id: number;
//     title: string;
//     description: string;
//     topic: number;
//     url: string;
//     order: number;
// }

// interface Topic {
//     id: number;
//     name: string;
//     children: Topic[];
//     parent: Topic;
//     resources: Resource[];
// }

export const metadata: Metadata = {
  title: 'Learn GIS - UW Geospatial',
  description: 'University of Waterloo\'s Geospatial Club'
}

export default async function LearnGIS() {
    // const res = await fetch('https://www.geoworkshops.ca/gis/topic/1/')
    // const topic: Topic = await res.json()

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl font-bold">This page is under construction.</h1>
            <p className="text-lg text-gray-700 mt-4">Check back shortly for geomatics tutorials and learning paths!</p>
            </div>
        </main>
        <Footer />
        </div>
    )
}
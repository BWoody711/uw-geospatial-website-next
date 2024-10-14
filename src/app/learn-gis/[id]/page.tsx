import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import Link from 'next/link';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

interface Resource {
    id: number;
    title: string;
    description: string;
    topic: number;
    url: string;
    order: number;
}

interface Topic {
    id: number;
    name: string;
    children: Topic[];
    parent: Topic;
    resources: Resource[];
}

// Mock function to get all IDs (replace with your data-fetching logic)
async function getAllIds(): Promise<{ id: string }[]> {
    const res = await fetch('https://www.geoworkshops.ca/gis/topics/');
    const topics: Topic[] = await res.json();
    return topics.map(topic => ({ id: topic.id.toString() }));
}

async function getTopics(id: string): Promise<Topic | null>  {
    const res = await fetch(`https://www.geoworkshops.ca/gis/topic/${id}/`)
    if (!res.ok) {
        return null
    }
    const topic: Topic = await res.json()
    return topic
}

// This function tells Next.js which dynamic paths to pre-build
export async function generateStaticParams() {
    const ids = await getAllIds();
    return ids.map(({ id }) => ({ id }));
}
  

export const metadata: Metadata = {
  title: 'Learn GIS - UW Geospatial',
  description: 'University of Waterloo\'s Geospatial Club'
}

export default async function LearnGIS({ params }: { params: { id: string } }) {
    const topic = await getTopics(params.id)

    if (!topic) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow">
            <div className="container mx-auto text-left py-10 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Sidebar */}
                    <div className="order-1 md:order-first md:col-span-3 text-left">
                        {topic.children.length > 0 ?
                        <div className="grid grid-cols-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Next Topics</h3>
                        {topic.children.map(child => {
                            return(
                                <Link key={child.id} href={`/learn-gis/${child.id}`} className="inline-flex items-center font-medium text-slate-800 dark:text-slate-900 hover:underline">
                                    <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                <p>{child.name}</p></Link>
                            )
                        })}
                        </div>
                        : <></>}
                        {topic.parent
                            ? <>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Previous Topic</h3>
                            <Link href={`/learn-gis/${topic.parent.id}`} className="inline-flex items-center font-medium text-slate-800 dark:text-slate-900 hover:underline">
                                <svg className="w-4 h-4 ms-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            <p>{topic.parent.name}</p></Link>
                            </> 
                            : <></>
                        }
                    </div>
                    {/* Selected Tutorial Content */}
                    <div className="order-2 md:col-span-9">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{topic.name}</h1>
                        {/* <p>Topic Description Here</p> */}
                        <h2 className="text-l md:text-xl font-bold mt-6">Tutorials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 mt-4">
                        {topic.resources.map(resource => {
                            return(
                                <a key={resource.id} href={resource.url} target='_blank' className="block md:col-span-3 p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 className="mb-2 text-l md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{resource.title}</h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">{resource.description}</p>
                                </a> 
                            )
                        })}
                        </div>
                    </div>
                {/* <div className="text-center">
                <h1 className="text-4xl font-bold">This page is under construction.</h1>
                <p className="text-lg text-gray-700 mt-4">Check back shortly for geomatics tutorials and learning paths!</p>
                </div> */}
                </div>
            </div>
        </main>
        <Footer />
        </div>
    )
}
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Working from '../components/Working'
import Footer from '../components/Footer'

export default function Home() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000)
	}, []);
	if (loading) {
		return (
			<Loading></Loading>
		)
	}
	return (
		<div className='h-full max-h-full p-8 bg-gray-600 md:p-16'>
			<Head>
				<title>Raihan Khoerul Imam</title>
			</Head>
			<div className='flex flex-col gap-8 md:flex-row'>
				<div className="w-full md:w-1/4">
					<Sidebar></Sidebar>
				</div>
				<div className="w-full md:w-3/4">
					<Content></Content>
				</div>
			</div>
			<Skills></Skills>
			<div className='flex flex-col items-start w-full min-h-full gap-6 p-5 bg-gray-800 rounded-lg shadow-md md:flex-row'>
				<Projects></Projects>
				<Working></Working>
			</div>
			<Footer></Footer>
		</div>
	)
}

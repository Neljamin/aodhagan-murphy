import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import Footer from "../landmarks/Footer"
import Header from "../landmarks/Header"
import AboutMe from "../sections/AboutMe"

const CoolScene = dynamic(() => import("../components/three/CoolScene"), { ssr: false })

const Home: NextPage = () => {
  return (
    <div className='relative flex flex-col justify-between min-h-screen'>
      <Head>
        <title>Aodhagán Murphy</title>
        <meta name='description' content='Aodhagán Murphy personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='relative flex flex-col  items-center  flex-grow'>
        <AboutMe />
        <div className='w-full h-40 bg-blue-100'>
          <CoolScene />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

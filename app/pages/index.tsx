import type { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
import Squiggle from "../components/shapes/Squiggle"
import SquiggleReverse from "../components/shapes/SquiggleReverse"

const BouncingCubes = dynamic(() => import("../components/three/BouncingCubes"))

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Head>
        <title>Aodhagán Murphy</title>
        <meta name='description' content='Aodhagán Murphy personal website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <header className='p-3 bg-purple-800'>
          <h1 className='text-6xl pb-3 font-bold underline text-white'>Aodhagán Murphy</h1>
          <h2 className='text-4xl font-bold text-white'>
            <del className='pr-1'>Frontend </del> Developer.
          </h2>
        </header>
        <main className='relative flex flex-col items-center'>
          <BouncingCubes />
          <Squiggle className='text-purple-800 pb-12 bg-white bg-opacity-95 md:bg-transparent' />
          <section className='p-3 pb-12 max-w-3xl bg-white p-6 border-2 border-purple-700 md:rounded border-0 md:border-2 bg-opacity-95'>
            <h2 className='text-4xl pb-3 text-purple-800'>Hi, I'm Aodhagán! 👋</h2>
            <p>I'm a frontend web developer currently working at a company called Connectr.</p>
            <div className='flex justify-center pb-6 pt-6'>
              <div className='relative h-64 w-64 rounded-full border-4 border-purple-700 overflow-hidden'>
                <img src='/profile.jpeg' alt='Aodhagán Murphy profile image' />
              </div>
            </div>
            <p className='mb-3'>
              I'm an experienced software engineer with a passion for frontend development and UI. I have a demonstrated
              history of working in the insurance, mentoring and e-learning industries. I'm skilled in React, AngularJs
              and other related web technologies.
            </p>
            <div className='flex justify-end'>
              <a
                className='block w-max p-3 bg-purple-800 text-white rounded'
                href='https://www.linkedin.com/in/aodhagán-murphy/'
                target='_blank'
                rel='noreferrer'
              >
                My LinkedIn
              </a>
            </div>
          </section>
          <SquiggleReverse className='text-green-100 bg-white bg-opacity-95 md:bg-transparent' />
          <section className='flex justify-center w-full pb-12 bg-green-100 h-40'></section>
        </main>
      </div>
      <footer className='flex flex-grow text-white bg-red-700 h-20 p-3 items-end justify-end'>
        <p>Built by me | 2022</p>
      </footer>
    </div>
  )
}

export default Home

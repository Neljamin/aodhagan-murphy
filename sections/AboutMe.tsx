import Image from "next/image"

export default function AboutMe() {
  return (
    <section className='mt-3 pb-12 max-w-3xl bg-white p-6 bg-opacity-95'>
      <div className='flex justify-center pb-6 pt-6'>
        <div className='relative h-64 w-64 bg-purple-700 rounded-full border-4 border-purple-700 overflow-hidden'>
          <Image priority layout='fill' src='/profile.jpeg' alt='Aodhagán Murphy profile image' />
        </div>
      </div>
      <h2 className='text-4xl text-center pb-3 text-purple-800'>I'm Aodhagán! 👋</h2>
      <p className='mb-6'>
        I'm a frontend web developer currently working at a company called Connectr. I have a demonstrated history of
        working in the insurance, mentoring and e-learning industries. I'm skilled in React, AngularJs and other related
        web technologies.
      </p>
      <div className='flex justify-center'>
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
  )
}

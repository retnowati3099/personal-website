import React from 'react'

function About() {
  return (
    <div className='flex justify-between items-center p-[81px]'>
        <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col gap-[10px]'>
                <span className='text-[#27374D] text-xl font-bold'>Hello everyone, I am</span>
                <span className='text-[#353535] text-[40px] font-bold'>Retno Wati</span>
                <span className='text-[#353535] text-base font-thin'>A Bachelor of Computer Science graduate from Universitas Gadjah Mada with cum laude predicate. Passionate about <b>web development</b> and <b>software engineering</b>. Continuously enhancing skills through online courses. Seeking job opportunities in web development or software engineering that allow for ongoing growth.</span> 
            </div>
            <div className='flex flex-col items-start gap-5'>
                <div className='flex gap-4'>
                    <img src="/src/assets/linkedin-square-icon.svg" alt="linkedin icon"/>
                    <img src="/src/assets/github-icon.svg" alt="github icon"/>
                    <img src="/src/assets/instagram-icon.svg" alt="instagram icon"/>
                </div>
                <button className='bg-[#27374D] text-white rounded-lg p-[10px] flex flex-start'>Download CV <img src="/src/assets/download.svg" alt="download icon" /></button>
            </div>
        </div>

        {/* img */}
        <div className='flex-1 flex justify-end items-center'>
            <div className='w-[260px] h-[260px] rounded-[130px]'>
                <img src="/src/assets/myfoto.jpg" alt="my foto" className='bg-cover w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-between items-center h-24 px-[81px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white sticky top-0'>
        <span className='text-[#27374D] text-xl font-bold'>Retno Wati</span>
        <div className='flex items-center gap-6'>
            <nav>
                <ul className='flex gap-6 text-[#353535] text-base font-normal'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
            <div><img src="/src/assets/dark-mode.svg" alt="Dark Mode" className='w-5'/></div>
        </div>
    </header>
  )
}

export default Navbar
import React from 'react'

function Skills() {
  return (
    <div id="skills" className='flex flex-col items-center p-[81px] gap-[72px]'>
      <div className='flex flex-col gap-3'>
        <span className='text-[#27374D] text-[32px] text-center font-bold'>Skills</span>
        <span className='text-[#353535] text-xl text-center'>I have experience with these technologies</span>
      </div>
      <div className='flex justify-between w-[1118px]'>
        <div className='flex flex-col items-center gap-[60px]'>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'> 
            <img src="/src/assets/html5-icon.svg" alt="html5 icon" />
            <span className='text-center'>HTML5</span>
          </div>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/bootstrap-5-logo-icon.svg" alt="bootstrap 5 icon" />
            <span className='text-center'>Bootstrap 5</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[60px]'>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/css-icon.svg" alt="css 3 icon" />
            <span className='text-center'>CSS 3</span>
          </div>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/tailwind-css-icon.svg" alt="tailwind css icon" />
            <span className='text-center'>Tailwind CSS</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[60px]'>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/javascript.svg" alt="javascript icon" />
            <span className='text-center'>JavaScript</span>
          </div>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/react-js-icon.svg" alt="react js icon" />
            <span className='text-center'>React Js</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[60px]'>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/git-icon.svg" alt="git icon" />
            <span className='text-center'>GIT</span>
          </div>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/figma-icon.svg" alt="figma icon" />
            <span className='text-center'>Figma</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-[60px]'>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/python-icon .svg" alt="python 3 icon" />
            <span className='text-center'>Python 3</span>
          </div>
          <div className='w-[140px] flex flex-col justify-center items-center gap-3'>
            <img src="/src/assets/mysql-icon.svg" alt="mysql icon" />
            <span className='text-center'>MySQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
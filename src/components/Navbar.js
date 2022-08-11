import {React, useState} from 'react'
import { Link } from 'react-scroll'
export const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [hidden, setHidden] = useState(true);
  const scrolled = () => {
    if(window.scrollY > 500){
      setHidden(false)
    } else{
      setHidden(true)

    }
  }

window.addEventListener('scroll', scrolled);

  return (
    <div className={hidden ? 'hidden' : ''}>
    <aside class="fixed right-0 top-96 z-50 w-60" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3  roundedbg-transparent">
          <ul class="space-y-2">
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('home')} to={"home"} smooth={true} duration={1000} className={activeLink === 'home' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">Home</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                <Link onClick={() => setActiveLink('about')} to={"about"} smooth={true} duration={1000} className={activeLink === 'about' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">About</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                  <Link onClick={() => setActiveLink('whatido')} to={"whatido"} smooth={true} duration={1000} className={activeLink === 'whatido' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">WhatIDo</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                  <Link onClick={() => setActiveLink('skills')} to={"skills"} smooth={true} duration={1000} className={activeLink === 'skills' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">Skills</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                  <Link onClick={() => setActiveLink('experience')} to={"experience"} smooth={true} duration={1000} className={activeLink === 'experience' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">Experience</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                  <Link onClick={() => setActiveLink('mywork')} to={"mywork"} smooth={true} duration={1000} className={activeLink === 'mywork' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">MyWork</span></div></Link>
            </li>
            <li className="group cursor-pointer flex items-center p-2 text-base font-normal  dark:text-white">
                  <Link onClick={() => setActiveLink('contact')} to={"contact"} smooth={true} duration={1000} className={activeLink === 'contact' ? 'active' : ''}><div className='w-3 h-3 border-[1px] rounded-full -z-5 flex items-center pl-2'><span class="ml-3 hidden group-hover:block">Contact</span></div></Link>
            </li>
          </ul>
      </div>
    </aside>
    </div>
  )
}

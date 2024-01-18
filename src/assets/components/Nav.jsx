import React from 'react'
import hyggex from './../hyggex.png'

export const Nav = () => {
  return (
    <nav className='max-container flex justify-between pb-10'>
        <div className='flex items-center justify-center cursor-pointer'>
            <div>
                <img className='w-[6rem] h-[6rem]' src={hyggex} alt="logo" />
            </div>
            <div className='text-[#06286E] text-[2rem]'>Hygge<span className='font-bold'>X</span></div>
        </div>
        <div className='flex gap-12 items-center'>
            <a href="#">Home</a>
            <a href="#">FlashCard</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#" className='rounded-full gradient py-2 px-8 text-white'>Login</a>
        </div>
    </nav>
  )
}

import React from 'react'

export const FAQ = () => {
  return (
    <div className='max-container pt-20'>
        <h1 className='gradient bg-clip-text font-bold text-3xl py-6'>FAQ</h1>
        <div className='flex flex-col w-1/2 gap-8'>
            <div className='p-4 rounded-lg border border-blue-700 flex justify-between items-center'><h6>Can education flashcards be used for all age groups?</h6><i className='cursor-pointer bx bxs-chevron-down' ></i></div>
            <div className='p-4 rounded-lg border border-blue-700 flex justify-between items-center'><h6>How do education flashcards work?</h6><i className='cursor-pointer bx bxs-chevron-down' ></i></div>
            <div className='p-4 rounded-lg border border-blue-700 flex justify-between items-center'><h6>Can education flashcards be used for test preparation?</h6><i className='cursor-pointer bx bxs-chevron-down' ></i></div>
        </div>
        <div className='h-[15rem]'></div>
    </div>
  )
}

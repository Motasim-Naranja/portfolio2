import React from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'

const Download = () => {
  return (
    <>
      <div className='rounded-[50%] h-10 w-10 flex items-center px-[9px] fixed bottom-[5vh] right-[5vw] text-xl bg-[#7843E9] text-white'>
         <BsDownload/>
        </div>
    </>
  )
}

export default Download
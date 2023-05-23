import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import {FiSearch} from 'react-icons/fi'
import {BsBellFill
} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import me from '../../public/assets/images/me.jpeg'
import {MdKeyboardArrowDown} from 'react-icons/md'


type props = {
  setOpenBar:Dispatch<SetStateAction<boolean>>
}

const Navbar:React.FC<props> = ({setOpenBar}) => {


 
  return (
    <nav className='fixed lg:z-40 lg:h-[100px] flex w-full bg-white'>
      <div className='lg:min-w-[288px] h-full px-5 py-10 lg:p-9  font-normal text-2xl bg-emerald-600 text-white'>
        Al-Irfan
      </div>
      <div className='lg:flex items-center justify-between w-full p-9 hidden'>
        <div>
          <div className='h-10 xl:w-[400px]  flex px-5 py-2 bg-[#F2F2F2] rounded-sm'>
            <input className='w-full bg-inherit h-full outline-none' placeholder='search . . .'/>
            <FiSearch size={20}   />     
          </div>
        </div>
        <div className='flex gap-7'>
          <div className='flex justify-between items-center'>
            <BsBellFill size={30}  />
          </div>
          <div className='flex gap-3 items-center'>
            <div className='w-11 h-11 rounded-full overflow-hidden'>
              <Image src={me} alt='profile' />
            </div>
            <div>
              <p className='font-medium text-base'>Namegoes here</p>
              <p className='font-normal text-base text-[#757575]'>Super-admin</p>
            </div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className='flex lg:hidden ml-auto p-5 gap-10 items-center'>
        <BsList size={30}  onClick={e => setOpenBar(prev => !prev)} />
        <FiSearch size={20}  />
      </div>
    </nav>
  )

}

export default Navbar
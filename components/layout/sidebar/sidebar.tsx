
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsBellFill} from 'react-icons/bs'
import me from '../../../public/assets/images/me.jpeg'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {MdGroups} from 'react-icons/md'
import {RiParentLine} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import Link from 'next/link'
import {MdKeyboardArrowDown} from 'react-icons/md'
// import { useRouter } from  'next/router';
import { treeData } from './tree'


type data = {
  id:Number;
  page:string;
  open: boolean;
  icon:any;
  parent:string;
  branch:{id:string, branch:string, route:string}[]
}

type props = {
  setOpenBar:Dispatch<SetStateAction<boolean>>,
  openBar:boolean
}

const List = [
  {id:1, page:'Dashboard', icon: BsSpeedometer2, route:''},
  {id:2, page:'Students', icon: HiUserGroup, route:'orders'},
  {id:3, page:'Teachers', icon: MdGroups, route:'payments'},
  {id:4, page:'Account', icon: FiSettings, route:'settings'},

]

const Sidebar:React.FC<props> = ({setOpenBar, openBar}) => {

  const [openBranch, setOpenBranch] = useState(true)
  const [current , setCurrent] = useState(treeData.parent)

  const closeBar = () => setOpenBar(false);

  const setValues= (page:string, list:data) => {
    setCurrent(page)
    setOpenBranch(prev => !prev)
    if(!list.open == true){
      list.open = true
    }else{
      list.open = false
    }
    for(const tree of treeData){
      if(tree.page !== list.page){
        tree.open = false
      }
    }
  }



  return (
    <div className={` bg-gray-700 text-[#EDE6DB] h-screen  scrollbar-hide lg:pt-[100px] min-w-[288px] fixed ${openBar ? 'block' : 'hidden'} ${openBar ? 'z-30' : 'z-0'} lg:block bg-white`}>
      <div className='p-6 flex justify-end pb-0 lg:hidden cursor-pointer' onClick={closeBar}>
        <AiOutlineCloseCircle size={30}   />  
      </div>
      <div className='py-6 flex flex-col'  >
        {treeData.map((list, i) => (
            <div>
              <div key={i}
              className={` p-3 px-9  flex gap-6 items-center hover:bg-black/[0.05]  border-b  border-black cursor-pointer text-base font-medium`} 
              onClick={(e) => setValues(list.parent, list)}
              >
                <list.icon size={30} color='#10b981' />
                <p>{list.page}</p>
                <MdOutlineArrowForwardIos className='ml-auto' />

              </div>
              {list.open && list.branch?.map((branch,i) => (
                <Link href='' key={i} >
                  <div
                  className={` p-3 pl-[80px] bg-gray-500  flex gap-2 items-center hover:bg-gray-700  cursor-pointer text-sm font-medium`}
                  >
                    <MdOutlineArrowForwardIos />
                    <p>{branch.branch}</p>
                    
                  </div>
                </Link>
              ))}
            </div>
            
        ))}
      </div>
      <div className='flex flex-col gap-7 p-8 border-t lg:hidden '>
        <div className='flex items-center gap-3  cursor-pointer'>
          <BsBellFill  size={30}  />
          <p className='font-medium text-base'>Notifications</p>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='w-11 h-11 rounded-full overflow-hidden'>
            <Image src={me} alt='profile' />
          </div>
          <div>
            <p className='font-medium text-base'>Namegoes here</p>
            <p className='font-normal text-base text-[#757575]'>Name@emailadd.com</p>
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
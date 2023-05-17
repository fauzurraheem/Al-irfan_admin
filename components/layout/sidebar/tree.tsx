import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {MdGroups} from 'react-icons/md'
import {RiParentLine} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import { IconType } from 'rc-tree/lib/interface'

 type data = {
  id:Number;
  page:string;
  open: boolean;
  icon:any;
  parent:string;
  branch:{id:string, branch:string, route:string}[]
}[]

export let treeData:data = [
  {id:1, page:'Dashboard', icon: BsSpeedometer2, parent:'dashboard',open:false ,branch: [
    {id:'a',branch:'Admin', route:'dashboard'},
    {id:'b',branch:'Students', route:'students'},
    {id:'c',branch:'Parent', route:'parents'},
    {id:'d',branch:'Teachers', route:'teachers'}
  ]},
  {id:2, page:'Students', icon: HiUserGroup,parent:'student' ,open:false, branch: [
    {id:'e',branch:'All Students', route:'all-students'},
    {id:'f',branch:'Students Details', route:'details'},
    {id:'g',branch:'Admission Form', route:'admission-form'},
    {id:'h',branch:'Student Promotion', route:'promotion'}
  ]},
  {id:3, page:'Teachers', icon: MdGroups,parent:'teacher' ,open:false, branch: [
    {id:'i',branch:'All Teachers', route:'all-teachers'},
    {id:'j',branch:'Teachers Details', route:'details'},
    {id:'k',branch:'Add Teacher', route:'add-teacher'},
    {id:'l',branch:'Payment', route:'payment'}
  ]},
  {id:4, page:'Parents', icon: RiParentLine ,open:false,parent:'parent', branch: [
    {id:'m',branch:'All Parents', route:'all-parents'},
    {id:'n',branch:'Parents Details', route:'details'},
    {id:'o',branch:'Add Parent', route:'add-parents'},
  ]},
  {id:5, page:'Account', icon: FiSettings ,open:false, parent:'account',branch:[] }
];

'use client'
import React, { useState } from 'react'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import {FiLoader} from 'react-icons/fi'
import * as Yup from 'yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type defaultValues = {
  name:string,
  password: string
 
}

const Login:React.FC = () => {


  const LoginSchema = Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().min(6, 'Password is required')
  });

  const defaultValues:defaultValues = {
    name:"",
    password:""
  }

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;



  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)


  const onSubmitForm:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    console.log(data)
   setLoading(false)
  }




  return (
    <div className='md:m-auto h-screen flex items-center justify-center text-gray-700 text-base bg-white md:bg-gray-100'>
      <div className='bg-white p-8 w-[420px] rounded-md md:shadow-md'>
        <h1 className='text-2xl text-center text-emerald-500'>Al-Irfan</h1>
        <p className='text-center italic'>Login to admin</p>
        <form onSubmit={handleSubmit(onSubmitForm)} >
          <div className='flex flex-col space-y-1 mb-2'>
          <label htmlFor="name" className='font-medium text-base'>Username.</label>
            <input type="text" className={`border border-gray-300 rounded outline-none py-2 px-4  ${errors.name ? 'focus:border-red-500' : 'focus:border-emerald-500'}`} {...register('name')} />
           
          </div>
          <div className='flex flex-col '>
          <label htmlFor="password" className='font-medium text-base'>Password.</label>
            <div className=' relative'>
              <input type={`${show ? 'text' : 'password'}`} className={`border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-2 px-4 ${errors.password ? 'focus:border-red-500' : 'focus:border-emerald-500'}`}  {...register('password')} />
              {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
              }
            </div>
          </div>
          <button type='submit' className={`w-full rounded-md py-2 flex items-center justify-center gap-3 bg-emerald-500 font-semibold text-white text-xl  cursor-pointer mt-4 `} >Login {loading && (<FiLoader size={20} />)}</button>
        </form>
      </div>
    </div>
  )
}
export default Login
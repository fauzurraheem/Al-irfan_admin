import Link from 'next/link'
import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import {TbCurrencyNaira} from 'react-icons/tb'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {BsShop} from 'react-icons/bs'
import { useRouter } from 'next/router';



const Dashboard = () => {
  return (
    <article>
        <div className='p-8 text-sm'>
          <section className='grid  md:grid-cols-2 gap-4'>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Total Revenue</p>
                  <p className='m-0'>(Last 30 Days)</p>
                </div>
                <span className='m-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center'>
                  <TbCurrencyNaira size={30} className='text-emerald-500'/>
                </span>
              </div>
              <span className='text-lg font-medium'>N0.00</span>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Total Order</p>
                  <p className='m-0'>(Last 30 Days)</p>
                </div>
                <span className='m-0 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center'>
                  <MdOutlineAddShoppingCart size={30} className='text-red-500' />
                </span>
              </div>
              <span className='text-lg font-medium'>0</span>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Todays Revenue</p>
                  <p className='m-0'>(Last 30 Days)</p>
                </div>
                <span className='m-0 w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center '>
                  <AiOutlineDollarCircle size={30} className='text-amber-500' />
                </span>
              </div>
              <span className='text-lg font-medium'>N0.00</span>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Total Shops</p>
                  <p className='m-0'>(Last 30 Days)</p>
                </div>
                <span className='m-0 w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center'>
                  <BsShop size={30} className='text-cyan-500' />
                </span>
              </div>
              <span className='text-lg font-medium'>10</span>
            </div>
          </section>
      </div>
    </article>
  )
}

export default Dashboard
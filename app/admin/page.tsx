import React from 'react';
import {TbCurrencyNaira} from 'react-icons/tb'
import Chart from '@/components/charts/pieChart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const Dashboard = () => {
  return (
    <article className='bg-[#ebeded]'>
        <div className='p-8 text-sm'>
          <section className='grid  md:grid-cols-2 gap-4'>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <span className='m-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center'>
                  <TbCurrencyNaira size={30} className='text-emerald-500'/>
                </span>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Students</p>
                  <p className='text-xl font-medium m-0'>100</p>
                </div>
              </div>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <span className='m-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center'>
                  <TbCurrencyNaira size={30} className='text-emerald-500'/>
                </span>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Teachers</p>
                  <p className='text-xl font-medium m-0'>12</p>
                </div>
              </div>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <span className='m-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center'>
                  <TbCurrencyNaira size={30} className='text-emerald-500'/>
                </span>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Parents</p>
                  <p className='text-xl font-medium m-0'>70</p>
                </div>
              </div>
            </div>
            <div className='h-32 bg-white p-6 rounded-md flex justify-between flex-col'>
              <div className='flex justify-between'>
                <span className='m-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center'>
                  <TbCurrencyNaira size={30} className='text-emerald-500'/>
                </span>
                <div className=''>
                  <p className='m-0 text-base font-medium'>Non Teaching Staff</p>
                  <p className='text-xl text-center font-medium m-0'>7</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='bg-white mt-8'>
                <Chart />
            </div>
          </section> 
      </div>
    </article>
  )
}

export default Dashboard
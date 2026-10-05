'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {
  const router = useRouter()
  const destination = ['Tokyo', 'Paris', 'NewYork']

  return (
    <div className='flex justify-center items-center text-white font-bold text-[40px] h-full flex-col gap-4'>
      <div className='font-bold text-2xl'>
        Choose Your Destination
      </div>
      <div className='flex flex-col gap-4'>
        {destination.map((d, index) => (
          <div
            key={index}
            className='font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] text-black bg-white hover:opacity-50 transition-all cursor-pointer'
            onClick={() => router.push(`/destinations/${d}`)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
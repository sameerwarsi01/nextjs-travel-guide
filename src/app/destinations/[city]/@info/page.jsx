'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
  const params = useParams()
  const city = decodeURIComponent(params.city)

  return (
    <div className='text-white mt-[100px] w-[50%]'>
      {city} is the best city.
    </div>
  )
}
'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

// Slash '@/' ke saath sahi import karein
import parisImg from "@/assets/Paris.jpeg"
import tokyoImg from "@/assets/Tokyo.jpeg"
import newYorkImg from "@/assets/NewYork.jpeg"

export default function Page() {
  const params = useParams()
  const city = decodeURIComponent(params.city)

  return (
    <div className='text-white mt-[100px] w-[50%] flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{city} is a beautiful city</h2>

      {city === "Paris" && (
        <Image src={parisImg} width={400} height={400} alt="Paris" className="rounded-lg" />
      )}

      {city === "Tokyo" && (
        <Image src={tokyoImg} width={400} height={400} alt="Tokyo" className="rounded-lg" />
      )}

      {/* Dono conditions handle karein (space ke saath ya bina space) */}
      {(city === "New York" || city === "NewYork") && (
        <Image src={newYorkImg} width={400} height={400} alt="New York" className="rounded-lg" />
      )}
    </div>
  )
}
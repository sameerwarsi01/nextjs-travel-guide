import React from 'react'

export default function Layout({ children, info }) {
  return (
    <div className='flex'>
      {children}
      {info}
    </div>
  )
}
import React from 'react'

const Header = ({headerTitle = "Sample Headding"}) => {
  return (
    <header className='bg-blue-900 p-5 text-center'>
        <h1 className='text-white text-2xl'>{headerTitle}</h1>
    </header>
  )
}

export default Header
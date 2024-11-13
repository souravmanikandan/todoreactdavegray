import React from 'react'

const Footer = ({items}) => {
  return (
    <footer className='bg-blue-900 p-3 bottom-0 fixed w-full text-center'>
        <h1 className='text-white text-lg'>{items.length} list {items.length > 0 ? "items" : "item"}</h1>
    </footer>
  )
}

export default Footer
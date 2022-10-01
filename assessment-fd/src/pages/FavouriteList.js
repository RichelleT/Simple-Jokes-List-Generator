import React from 'react'
import ReactDom from 'react-dom'
//import Navbar from '../components/Navbar';

export default function FavouriteList({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='overlay'/>
          <div className='modalStyle'>
            <button className='closeBtn' onClick={onClose}>X</button>
            {children} 
          </div>
    </>,
    document.getElementById('portal')
  )
}
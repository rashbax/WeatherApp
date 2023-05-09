import React from 'react'
import Rsearch from './Rsearch'

export default function Header() {
  return (
    <div className='header'>
        <h3 className="header__title">Weather App</h3>
        <Rsearch/>
    </div>
  )
}

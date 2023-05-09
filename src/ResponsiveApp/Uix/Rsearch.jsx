import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export default function Rsearch(props) {

    const [query, setQuery] = useState('Samarkand');
     

function inputHandler(e){
  setQuery(e.target.value)
  props.onStateChange(e.target.value)
}



function search(){
  props.onStateClick()
}

  return (
    <>
    <div className="searchRes">
    <input type="text" className='Rsearch' placeholder='Enter city name'
            value={query}
            onChange={ inputHandler}
            />
            <a href="##" className='searchIcon' onClick={search} >
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
            </a>
    </div>
    </>
  )
}

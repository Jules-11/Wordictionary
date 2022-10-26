import React from 'react'
import { useRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons'

const Input = ({ setWord }) => {
    const inputRef = useRef()
    const searchWordHandler = () => {

        setWord(inputRef.current.value);
        inputRef.current.value = "";
    };

  return (
    <div className='input-container'> 
        <input className="search-bar" type='text' placeholder='Enter word...' ref={inputRef} />
        <UilSearch size={30} onClick={searchWordHandler} className="search-input"/>
    </div>
  )
}

export default Input
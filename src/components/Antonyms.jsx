import React from 'react'

const Antonyms = ({ antonyms }) => {
    let antonymMap
    if(antonyms.hasOwnProperty("antonyms") && antonyms.antonyms.length !== 0) {
    antonymMap = antonyms.antonyms.slice(0,5).map((antonym, i) => (
        <li key={i}>{antonym.charAt(0).toUpperCase() + antonym.slice(1)}</li>
    ))
} else{
    return;
}
  return (
    <div className='def'>
    {(antonyms.word !== "") && <p className='def-title'>Get antonyms:</p>}
    <ul className="list">{antonymMap}</ul>
</div>
  )
}

export default Antonyms
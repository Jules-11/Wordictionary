import React from 'react'

const Examples = ({ examples }) => {
    let exampleMap 
    if(examples.hasOwnProperty("examples") && examples.examples.length !== 0){
    exampleMap = examples.examples.slice(0,5).map((example, i) => (
        <li key={i}>{example.charAt(0).toUpperCase() + example.slice(1)}</li>
    ));
} else{
    return;
}

  return (
    <div className='def'>
        {(examples.word !== "") && <p className='def-title'>Get examples of how the word is used:</p>}
        <ul className="list">{exampleMap}</ul>
    </div>
  )
}

export default Examples
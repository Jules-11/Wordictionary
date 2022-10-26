import React from 'react'

const Synonyms = ({ synonyms }) => {
    let synonymMap
    if(synonyms.hasOwnProperty("synonyms") && synonyms.synonyms.length !== 0){
    synonymMap = synonyms.synonyms.slice(0,5).map((synonym, i) => (
        <li key={i}>{synonym.charAt(0).toUpperCase() + synonym.slice(1)}</li>
    ));
} else{
    return;
}
  return (
    <div className='def'>
    {(synonyms.word !== "") && <p className='def-title'>Get synonyms:</p>}
    <ul className="list">{synonymMap}</ul>
</div>
  )
}

export default Synonyms
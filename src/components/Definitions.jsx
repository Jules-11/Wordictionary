import React from "react";

const Definitions = ({ definitions }) => {
  let definitionMap 
  if(definitions.hasOwnProperty("definitions")) {
   definitionMap = definitions.definitions.slice(0,15).map((def, i) => (
    <li key={i}>{def.definition.charAt(0).toUpperCase() + def.definition.slice(1)}</li>
  ));
} else{
  definitionMap = <p>{definitions.message}</p>
}
console.log(definitions)
  return (
    <div className="def">
      {(definitions.word !== "" && definitions.hasOwnProperty("word")) && <p className="def-title"> Get definition of the word <span className="word">{definitions.word}</span> : </p>}
      <ul className="list">{definitionMap}</ul>
    </div>
  );
};

export default Definitions;

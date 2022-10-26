import React, { useEffect, useState } from "react";
import Antonyms from "./components/Antonyms";
import Definitions from "./components/Definitions";
import Examples from "./components/Examples";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Synonyms from "./components/Synonyms";

function App() {
  const [word, setWord] = useState("aurora");
  const [definitions, setDefinitions] = useState({ word: "", definitions: [] });
  const [examples, setExamples] = useState({ word: "", examples: [] });
  const [synonyms, setSynonyms] = useState({ word: "", synonyms: [] });
  const [antonyms, setAntonyms] = useState({ word: "", antonyms: [] });

  const getDefinitionAPI = () => {
    if (word !== "") {
      const option = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9760176e26mshcbacd5d550ea895p19a6cdjsn4754e8422272",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };
      fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
        option
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setDefinitions(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const getExampleApi = () => {
    if (word !== "") {
      const exampleOption = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9760176e26mshcbacd5d550ea895p19a6cdjsn4754e8422272",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };

      fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
        exampleOption
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setExamples(data);
        })
        .catch((err) => console.error(err));
    }
  };

  const getSynonymApi = () => {
    if (word !== "") {
      const synonymOption = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9760176e26mshcbacd5d550ea895p19a6cdjsn4754e8422272",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };
      fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
        synonymOption
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSynonyms(data);
        })
        .catch((err) => console.error(err));
    }
  };

  const getAntonymApi = () => {
    if (word !== "") {
      const antonymOption = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9760176e26mshcbacd5d550ea895p19a6cdjsn4754e8422272",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };
      fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`,
        antonymOption
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAntonyms(data);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getDefinitionAPI();
    getExampleApi();
    getSynonymApi();
    getAntonymApi();
  }, [word]);

  return (
    <div className="main-container">
      <Navbar />
      <div className="header">
        <h1 className="title">Wordictionary</h1>
      </div>
      <Input setWord={setWord} />
      <Definitions definitions={definitions} />
      <Examples examples={examples} />
      <Synonyms synonyms={synonyms} />
      <Antonyms antonyms={antonyms} />
    </div>
  );
}

export default App;

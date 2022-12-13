import "./styles.css";
import { useState } from "react";
import { luhnAlgo } from "./luhn.js";
const backgroundImage = require("../public/Bank of Nikolai.PNG");

export default function App() {
  const [ccNum, setCCNum] = useState("");
  const [response, setResponse] = useState(
    "That is not real number. Don't you trust us?"
  );
  const [validity, setValidity] = useState("false");
  const updateCCNum = (event) => {
    setCCNum(event.target.value);
    const resultArr = luhnAlgo(event.target.value);
    setResponse(resultArr[0]);
    setValidity(resultArr[1]);
  };
  return (
    <div className="App">
      <h1>Bank of Nikolai</h1>
      <h2>
        Give us your credit card, and we'll keep it real safe. Front pocket,
        left side. Very safe in there. You can trust us, look! We have pen.
      </h2>
      <h3>Type credit card number below:</h3>
      <input
        type="number"
        inputMode="numeric"
        onChange={updateCCNum}
        value={ccNum}
        className={validity}
      />
      <h3 className={validity}>{response}</h3>
      <img src={backgroundImage} alt="Some trustworthy Russian gentlemen" />
    </div>
  );
}

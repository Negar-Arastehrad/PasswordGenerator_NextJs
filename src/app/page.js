"use client";
import { useState } from "react";
import Button from "./Components/Button/Button";
import Checkbox from "./Components/Checkbox/Checkbox";
import UsePassGenerator from "./Hooks/Use-pass-generator";
import Strength from "./Components/Strength/Strength";

import BtnStyle from './Components/Button/Button.module.css'


export default function Home() {
  const [copied, setcopied] = useState(false);
  const [length, setLength] = useState(4);
  const [CheckboxData, setCheckboxData] = useState([
    { title: "UpperCase Letters", state: false },
    { title: "LowerCase Letters", state: false },
    { title: "Numbers", state: false },
    { title: "Symbols", state: false },
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };

  const handleCheckboxChange = (i) => {
    const updateCheckboxData = [...CheckboxData];
    updateCheckboxData[i].state = !updateCheckboxData[i].state;
    setCheckboxData(updateCheckboxData);
  };

  const { password, errorMessage, generatePassword } = UsePassGenerator();

  return (
    <main>
      <div className="container">
        <h1>Pass Generator</h1>

        <div className="generate-box">
          {password && (
            <div className="pass-container">
              <div className="pass">
                <p>{password}</p>
                <Button
                  customClass={BtnStyle.copyBtn}
                  onClick={handleCopy}
                  text={copied ? "Copied" : "Copy"}
                />
              </div>
              <Strength password={password} />
            </div>
          )}


          <p className="customize-text">Customize Your Password</p>

          <div className="length">
            <div className="labels">
              <label htmlFor="Range">Character Length</label>
              <label htmlFor="Range">{length}</label>
            </div>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              id="Range"
            />
          </div>

          <div className="checkboxes">
            {CheckboxData.map((checkbox, index) => {
              return (
                <Checkbox
                  title={checkbox.title}
                  onChange={() => handleCheckboxChange(index)}
                  state={checkbox.state}
                  key={index}
                />
              );
            })}
          </div>

          {errorMessage && <p className="errorMessage"> {errorMessage} </p>}

          <Button
            customClass={BtnStyle.generateBtn}
            onClick={() => generatePassword(CheckboxData, length)}
            text="Generate Password"
          />
        </div>
        </div>
    </main>
  );
}

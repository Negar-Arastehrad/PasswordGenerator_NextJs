import React, { useState } from 'react'

const UsePassGenerator = () => {

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = (checboxData , passLength) => {

    let charset = '' ;
    let generatedPassword = '' ; //pass i k gharare dar nahayat besaze
    const selectedOption = checboxData.filter((checkbox) => checkbox.state); //oonai k state true daran

    if (selectedOption.length === 0) {
      setErrorMessage("Select At Least One Option !")
      setPassword('')
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {

        case 'UpperCase Letters' :
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
          break;

        case 'LowerCase Letters' :
          charset += "abcdefghijklmnopqrstuvwxyz" ;
          break;

        case 'Numbers' :
          charset += "0123456789" ;
          break;

        case 'Symbols' :
          charset += "!@#$%^&*()" ;
          break;

        default : 
          break;  
      }   
    });

    for (let i=0; i<passLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex]
    }

    setPassword(generatedPassword)
    setErrorMessage("")

  }

  return {password , errorMessage , generatePassword}
}

export default UsePassGenerator
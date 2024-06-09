import Header from "./components/Header";
import Userinput from "./components/Userinput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState({
    intialInverstment: 15000,
    annualInverstment: 1200,
    expectedReturn: 6,
    duration: 10
});

function onChangeValue(inputIdentifier, newValue) {
    setInitialValue(prevUserData => {
        return {
            ...prevUserData,
            [inputIdentifier]: newValue
        }
    })
}
  return (
    <>
    <Header />
    <Userinput initialValue={initialValue} changeValue={onChangeValue}/>
    <Result input={initialValue}/>
    
    </>
    
  )
}

export default App

import Header from "./components/Header";
import Userinput from "./components/Userinput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = initialValue.duration >=1;

function onChangeValue(inputIdentifier, newValue) {
    setInitialValue(prevUserData => {
        return {
            ...prevUserData,
            [inputIdentifier]: +newValue
        }
    })
}
  return (
    <>
    <Header />
    <Userinput initialValue={initialValue} changeValue={onChangeValue}/>
    {!inputIsValid && <p className="center">Please enter duration greater than Zero!!!</p>}
    {inputIsValid && <Result input={initialValue}/>}
    
    </>
    
  )
}

export default App

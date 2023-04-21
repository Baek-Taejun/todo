import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 


function Btn({text, onClick}){
  return<button
  onClick={onClick}
    style={{
    backgroundColor : "tomato",
    color : "white",
    padding : "10px 20px",
    border : 0,
    borderRadius : 10,

  }}>{text}</button>
}

function App() {  
  const [value,setValue]=useState("Save Changes");
  const changeValue = () => setValue("Revert Change");

  return ( 
    <div>
    <Btn text = {value} onClick={changeValue} />
    <Btn text = "Continue" />

    </div>
        );
  };



export default App; 
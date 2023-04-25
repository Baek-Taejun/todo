import './App.css';
import Button from "./Button";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {   
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = ()=> setCounter((prev)=> prev +1);
  const onChange = (event) =>  setKeyword(event.target.value);
  console.log("i run only once");

  useEffect(()=> {
    console.log("i ren when keyword changes");
  },[keyword]);

  useEffect(()=> {
    console.log("i run when counter changes");
  },[keyword]);
  


  return ( 

    <div>
        <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder='Search here...'/>
        <h1>{counter}</h1> 
        <button onClick ={onClick}>Button</button>
    </div>
  );  
  };  



export default App;
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {
  const [amount, setAmount] = useState();
  const [inverted,setInverted] = useState(false);
  const onChange=(event)=>{
    setAmount(event.target.value);
  }

  const reset = ()=> setAmount(0);
  const onFlip = ()=>{
      reset();
      setInverted((current)=> !current);
  }
  return ( 
    <div>
        <h1 className="hi">Super Converter</h1> 

        <div>
        <label htmlFor="minutes">Minutes</label>
        <input 
        value={inverted ? amount * 60 : amount} 
        id="minutes"  
        placeholder= "Minutes" 
        type = "number" 
        disabled={inverted}
        onChange={onChange}

        /> 
        </div>


        <div>
        <h4>You want to convert : {amount}</h4>
        <label htmlFor="hours" >Hours</label>
        <input 
        value={inverted ? amount  : Math.round(amount / 60)} 
        id="hours" 
        placeholder= "Hours" 
        type = "number" 
        disabled={!inverted}
        onChange={onChange}
  
        />
        </div>

        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>

    </div>
        );
}

export default App;
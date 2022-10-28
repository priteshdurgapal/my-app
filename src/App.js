import logo from './logo.svg';
import './App.css';
import './Login.js'
import Login from './Login.js';
import FunctionClick from './FunctionClick';


const App =() => {

  const name = 'World';
  return (
    <div>  
      <h2> Hello {name} </h2>   
      <p> Welcome to the {name}. </p> 
      <Login/>
      <FunctionClick/>
    </div>   
  )
}

export default App;

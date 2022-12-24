import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  let myName = useRef()
  let txtName = useRef()

  const getName = () => {
    // let name = "Phakpoom"
    let name = txtName.current.value
    myName.current.innerText = name
  }
  
  return (
    <>
      Enter Name: <input type="text" ref={txtName} />
      <button onClick={getName}>Click me</button>
      <p ref={myName}>Name</p>
    </>
  );
}

// function updateName(){
//   //DOM -- Document Object Model    Old JavaScript
//   let myName = document.getElementById('myname');
//   myName.innerText = "Phakpoom";
// }
export default App;

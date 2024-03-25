import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { provide } from '../store/contextprovider';
export default function Textform({heading}) {
  const [presentText,toaddText]=useState([]);
  const [noOfWords,updateWords]=useState(0);
  const [noOfChar,updateChars]=useState(0)
  const textToHandle=(event)=>{
    toaddText(event.target.value)
    let lastChar="";
    // console.log(event)
    {lastChar=event.target.value.charAt(event.target.value.length-1)}
    if(lastChar===" "){
      updateWords(event.target.value.split(" ").length-1);
    }
    else{
      updateChars(event.target.value.length);
    }
    
}
const {showAlert}=useContext(provide)
const handleUpperCase=()=>{
  let capitilizeText="";
    {capitilizeText=presentText.toUpperCase()}
    toaddText(capitilizeText);
    showAlert("Upper case enabled","alert-info")
}
const handleLowerCase=()=>{
  let capitilizeText="";
    {capitilizeText=presentText.toLowerCase()}
    toaddText(capitilizeText);
    showAlert("lower case enabled","alert-info")
}
const handleReset=()=>{
  toaddText("");
  updateWords(0);
  updateChars(0);
  showAlert("All text cleared","alert-danger")
}
const [presentMode,updatedMode]=useState("light")
const handleDark=()=>{
  {document.body.style.backgroundColor="#2e2d2d";
  document.body.style.color="white";
  document.querySelector(".form-control").style.backgroundColor="#2e2d2d";
  document.querySelector(".form-control").style.color="white";
  document.title="TeXT UTils-Home-Dark_mode"
}
updatedMode("dark")
showAlert("dark mode enabled","alert-info")
}
const handleLight=()=>{
  {document.body.style.backgroundColor="white";
  document.body.style.color="black";
  document.querySelector(".form-control").style.backgroundColor="white";
  document.querySelector(".form-control").style.color="black";
}
updatedMode("light")
document.title="TeXT UTils-Home"
showAlert("light case enabled","alert-info")
}
const handleExtraSpaces=()=>{
  let newText=presentText.split(/[ ]+/);
  toaddText(newText.join(" "));
  showAlert("extra spaces removed","alert-info")
}
  return (
    <>
      <div class="mb-3">
  <label for="myBox" class="form-label"><h1>{heading}</h1></label>
  <textarea class="form-control" id="myBox" rows="10" onChange={()=>textToHandle(event) } value={presentText}></textarea>
</div>
<button className='btn btn-primary mx-2 my-2' onClick={()=>handleUpperCase()}>UPPER CASE</button>
<button className='btn btn-primary mx-2 my-2' onClick={()=>handleLowerCase()}>lower case</button>
<button className='btn btn-primary mx-2 my-2' onClick={()=>handleExtraSpaces()}>Remove extra spaces</button>
<button className='btn btn-primary mx-2 my-2' onClick={()=>handleReset()}>Reset</button>
{presentMode==="dark"?<button className='btn btn-primary mx-2 my-2' onClick={()=>handleLight()}>Light mode</button>:<button className='btn btn-info mx-2 my-2' onClick={()=>handleDark()}>Dark mode</button>}
<div className='container'>words={noOfWords} charachers={noOfChar}
<div>time taken to read={0.008*noOfWords*60} seconds</div>
<div className='container'>
  <h2>preview</h2>
  <p id='pcolor'>{presentText.length>0?presentText:"Enter something in textbox"}</p>
</div>
</div>
    </>
  )
}
Textform.prototype={
    heading:PropTypes.string.isRequired
}

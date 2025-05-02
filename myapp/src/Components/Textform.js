import React,{useState} from 'react'

 function Textform(props) {
  const handleUpClick = () =>{
    // console.log("uppercase was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext)
  }

  const handleloClick = () =>{
    // console.log("uppercase was clicked"+text)
    let newtext=text.toLowerCase();
    setText(newtext)
  }

  const handleOnchange = (event) =>{
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText]=useState('');
  // setText("newText");
  return (
    <div className='container'>
      <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" 
  value={text} onChange={handleOnchange} id="mybox"  rows="8"></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>

<button className="btn btn-primary mx-1" onClick={handleloClick}>convert to lowercase</button>

<div className="container my-4">
  <h2>your text summary</h2>
  
  <p>{text.split(" ").length} words and {text.length} characters</p>
  
  <p>{0.008*text.split(" ").length} minutes to read</p>

  <h2>preview</h2>
  <p>{text}</p>
</div>

    </div>
  )
}
export default Textform;
import React,{useState} from 'react'

 function Textform(props) {
  const handleUpClick = () =>{
    // console.log("uppercase was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handleOnchange = (event) =>{
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText]=useState('enter text hhere');
  // setText("newText");
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" 
  value={text} onChange={handleOnchange} id="mybox"  rows="8"></textarea>
</div>

<button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
      
    </div>
  )
}
export default Textform;
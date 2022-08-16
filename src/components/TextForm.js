import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value)
    }
    const[text, setText] = useState('');

    return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label">  </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase </button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase </button>
    <button className="btn btn-primary mx-1" onClick={handleClClick}> Clear </button>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} character(s)</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

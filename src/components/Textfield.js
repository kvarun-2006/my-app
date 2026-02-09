import React, { useState } from 'react'

export default function Textfield() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  return (

    <div className="container">
      <textarea className="form-control" value={text} onChange={handleChange} rows="10"></textarea>
      <button type="button" className="btn btn-primary my-3" onClick={handleClick}>Convert to uppercase</button>
    </div>
  )
}

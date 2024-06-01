import React, { useState } from "react";

export default function TextForm(props) {
  String.prototype.toSentenceCase = function () {
    let words = this.toLowerCase().split(' ');
    let newWord = words[0].charAt(0).toUpperCase();
    newWord += words[0].substring(1);
    words[0] = newWord;
    return words.join(' ');
  }

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "Success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "Success");
  }
  const handleClearClick = () => {
    const val = prompt("Please write 'YES' to confirm");
    if (val == null) return;
    if (val.toLowerCase() ==='yes') setText("");
    props.showAlert("Textbox has been cleared", "Success");
  }
  const handleSentCaseClick = () => {
    let newText = text.toSentenceCase();
    setText(newText);
    props.showAlert("Text converted to Sentencecase", "Success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleSpecialChars = ()=> {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text.charCodeAt(i);
      if ((ch >= 67 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57) || ch === 32) newText += text.charAt(i);
    }
    setText(newText.split(" ").filter((e) => {return e !== ""}).join(' '));
    props.showAlert("Special characters has been removed", "Success");
  }

  const handleExtractNums = () => {
    let ans = [];
    let arr = text.trim().split(" ");
    for (let i = 0; i < arr.length; i++) {
      let num = "";
      for (let j = 0; j < arr[i].length; j++) {
        if (!isNaN(arr[i].charAt(j))) num += arr[i].charAt(j);
      }
      if (num.length !== 0) ans.push(num);
    }
    ans = ans.join(' ');
    setText(ans);
    if (ans.length > 0) {
      props.showAlert("Numbers extracted", "Success");
    }
    else {
      props.showAlert("No number found", "Success");
    }
  } 

  const handleRandomText = () => {
    let length = prompt("Enter the length of Text:");
    if (length == null) return;
    while (isNaN(length) || Number(length) < 0) {
      length = prompt("Enter the length of Text:");
      if (length == null) return;
    }
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVW XYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()<>?:"{}|,./;[]\\';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    setText(result);
    props.showAlert("Random text generated", "Success");
}

const handleRemoveNums = () => {
  let newText = "";
    for (let i = 0; i < text.length; i++) {
      let ch = text.charCodeAt(i);
      if (!(ch >= 48 && ch <= 57)) newText += text.charAt(i);
    }
    setText(newText.trim());
    props.showAlert("Numbers removed", "Success");
}

const handleCopy = () => {
  try {
    navigator.clipboard.writeText(text)
        .then(() => {
            props.showAlert("Text has been copied to clipboard", "Success");
        })
        .catch((error) => {
            console.error('Unable to copy text: ', error);
            props.showAlert("Failed to copy text to clipboard", "Danger");
        });
  } catch (error) {
    console.error('Error copying text to clipboard: ', error);
    props.showAlert("An unexpected error occurred while copying text to clipboard", "Danger");
  }
}

const handlePaste = async () => {
  try {
      let newText = await navigator.clipboard.readText();
      setText(text + newText);
      props.showAlert("Text pasted from clipboard", "Success");
  } catch (error) {
      console.error('Error pasting text from clipboard: ', error);
      props.showAlert("Failed to paste text from clipboard", "Danger");
  }
}


  return (
    <>
      <div className="container mb-3 my-4" style={{color: props.mode === "dark" ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <textarea 
          className="form-control" 
          style={{color: props.mode === "dark" ? 'white' : 'black', backgroundColor: props.mode === "dark" ? '#212529' : 'white'}}
          id="myBox" rows="8" value={text} 
          onChange={handleOnChange} 
          placeholder="Enter the text here"
          
        >
        </textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick} disabled={text.length === 0}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleSentCaseClick} disabled={text.length === 0}>Convert to Sentencecase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleSpecialChars} disabled={text.length === 0}>Remove Special Characters</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtractNums} disabled={text.length === 0}>Extract Numbers</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveNums} disabled={text.length === 0}>Remove Numbers</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlePaste}>Paste Clipboard Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRandomText}>Generate Random Text</button>
        <button className="btn btn-primary my-2 mx-2 btn-danger" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
        
      </div>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Your text summary</h1>
        <p>{text.length === 0 ? 0 : text.trim().split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{text.length === 0 ? 0 : Math.floor((text.trim().split(" ").filter((e) => {return e !== ""}).length*0.5)/60)} Minutes {text.length === 0 ? 0 : (text.trim().split(" ").filter((e) => {return e !== ""}).length*0.5)%60} Seconds  read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to Preview!"}</p>
      </div>
    </>
  );
}

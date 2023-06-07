import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.onShowAlert("Text change to Uppercase!","success");
    }


    const handleLoClick = ()=>{
        // console.log("Lowercase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.onShowAlert("Text change to Lowercase!","success");
    }

    const ClearScr = ()=>{
        let newText = " ";
        setText(newText);
        props.onShowAlert("Text are clear!","success");

    }

    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // const Capitalize = ()=>{
    //     const newText = text.toLowerCase();
    //     let one = newText.charAt(0).toUpperCase() + newText.slice(1)
    //     setText(one); 
    // }

    // const un1 = []
    // const input = document.querySelector('input');

    // const saveun = ()=>{
    //     un1.push(input.text);
    // }

    // const undo = ()=>{
    //     const newText = un1.pop()
   
    //     input.text = newText ? newText : input.text
    // }
    // const handleCnClick = ()=>{
    //     console.log("Lowercase was Clicked");
    //     let cen = ()=>{
    //          textAlign = "center";
    //      };
    //     let newText = text;
    //     setText(newText);
    // }


    const handleOnChange = (event)=>{
        // console.log("On Change");
        // setText(text-1);
        setText(event.target.value);
    }

    
    const [text, setText] = useState(' '); //State
  return (
<>
    <div style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 align="center" >{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="mybox" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>Enter your text</label> */}
            <textarea className="form-control" value={text} placeholder='Enter your text here' onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="10" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-3" onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-3" onClick={ClearScr}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary m-3" onClick={speak}>Speak</button>
        {/* <button className="btn btn-primary m-3 " onClick={Capitalize}>Capitalize</button> */}
        {/* <button className="btn btn-primary m-3 " onClick={undo}>Undo</button> */}
        {/* <button className="btn btn-primary m-3 " onClick={handleCnClick}>Center</button> */}
    </div> 
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>
            Your text summary
        </h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p> {text.split(" ").length-1} Words and {text.length} Characters</p>
        <p>Time to read in minutes :- {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}</p>
        <p>Spaces :- {text.split(" ").length-1}</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}
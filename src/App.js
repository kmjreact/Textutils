import React, {useState} from 'react'
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import Textform from './components/Textform.js';
import About from './components/About';
import Counter from './components/Counter.js'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //Whether dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  // const removeBodyClass = ()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }
  const toggleMod = (cls)=>{
    // removeBodyClass(); 
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if(mode === 'light'){
    	setMode('dark');
      	document.body.style.backgroundColor = '#061c34';
        showAlert("Dark mode is enable","success");
        console.log(mode);
    }
    else{
    	setMode('light');
    	document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable","success");
      console.log(mode);


    }								
  }	

  return (
    <>
    <Router>
          <Navbar 
            title="TextUtils" 
            about="About Us" 
            contact = "Contact Us" 
            mode={mode} 
            toggleMod={toggleMod}
          /> 
          <Alert alert={alert}/>
          {/* <About/> */}			
          					
          <div className="container">
          <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}/>
          
                <Route exact path="/" element={<Textform heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} />
                <Route path="/counter" element={<Counter/>}/>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;

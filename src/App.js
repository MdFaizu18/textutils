
import './App.css';
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }

  const toggleMode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      
    }
  }

  return (

<>

{/* navbar header file  */}
<Navbar  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

          <div className='container mt-5'>
          {/* <Routes>   */}

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={ <TextForm heading="Enter Text Below To Analayze" showAlert={showAlert} mode={mode}/>} /> */}
          
        
         <TextForm heading="Enter Text Below To Analayze" showAlert={showAlert} mode={mode}/>
         </div>
</>

  );
}

export default App;

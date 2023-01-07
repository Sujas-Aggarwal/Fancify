import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar.js'
import TextBox from './components/TextBox.js'

function App() {
  const [mode, setMode] = useState("dark");
  const [bgmode, setBgMode] = useState("light");
  const [myStyle, setMyStyle] = useState({
    color:"black",
    backgroundColor:"white"
  });
  function toggleMode(){
    if (myStyle.color==="black"){
      setMyStyle({
        color:"white",
        backgroundColor:"#121212",
      });
      setMode("light");
      setBgMode("dark");
    }
    else{
      setMyStyle({
        color:"black",
        backgroundColor:"white",
      });
      setMode("dark");
      setBgMode("light");
    }
  }
  return (
    <><div className="container-fluid " style={myStyle}>
    <Navbar myStyle={myStyle} style={myStyle} bgmode={bgmode} mode={mode}/>
    <TextBox  myStyle={myStyle} style={myStyle} mode={mode} bgmode={bgmode}/>
    <div className="container"><button className={`btn btn-outline-${mode==="light"?"warning":"dark"}`} onClick={toggleMode}>Enable {mode} mode</button></div>
    </div>
    </>
  );
}

export default App;

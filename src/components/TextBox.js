import React,{useState} from 'react'
import Alert from './Alert.js';


export default function TextBox(props) {
  const [text,setText] = useState('');


  let characters=text.length;
  let word=0;
  let warning = "";
  let altwords=[];
  let invaltwords = [];
  let line = text.split("\n");
  for (let i=0;i<line.length;i++){
    line[i] = line[i].charAt(0).toUpperCase() + line[i].substring(1).toLowerCase();
  }
  line= line.join('\n');
  let words = line.split(" ");
  line = text.split("\n");
  let spaces=words.length-1;
  

  for(let i=0;i<words.length;i++){//for text formatization and counter
    if(words[i]!==' ' && words[i]!==''&& words[i]!=="\n" ){
      word++;
    }
   
    for (let j=0;j<words[i].length;j++){ //For Alternating
      if (j%2!==0){altwords[i]+=words[i][j].toLowerCase()}
      else if(j===0){
        altwords[i]= words[i][j].toUpperCase()
      } 
      else{
        altwords[i]+= words[i][j].toUpperCase();
      }
    }
    for (let j=0;j<words[i].length;j++){ //For Inverse Alternating
      if (j%2!==0){invaltwords[i]+=words[i][j].toUpperCase()}
      else if(j===0){
        invaltwords[i]= words[i][j].toLowerCase()
      } 
      else{
        invaltwords[i]+= words[i][j].toLowerCase();
      }
    }
  words[i]=words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  words = words.join(" ");
  altwords = altwords.join(" ");
  invaltwords = invaltwords.join(" ");
  



  const speak = () => {//Churaya Hua Code hai for Speaking The text Out Loud
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}



  if (spaces-word>1){//for counting spaces
    warning = "(It looks Like there are Some Extra Spaces Here)";
  }

  function changeText(event){//on change event for text-box
    setText(event.target.value);
  }

  function copyuc(event){//upper case
    navigator.clipboard.writeText(text.toUpperCase());
  }
  function copylc(event){//lower case
    navigator.clipboard.writeText(text.toLowerCase());
  }
  function copycc(event){//capital case
        navigator.clipboard.writeText(words);
  }

  function copyac(event){//capital case
    navigator.clipboard.writeText(altwords);
  }

  function copyiac(event){//capital case
    navigator.clipboard.writeText(invaltwords);
  }

  const clear = (event) =>{
    setText('');
    document.getElementById("mainBox").value='';
    
  };





  





  return (
    <>
      {/* Main text Box */}
      <div className="container  my-4" id="MainDiv" style={props.myStyle}>
        <label><h2 style={props.myStyle}><b>Text Enhancer using React JS And Bootstrap By Sujas</b></h2>  </label><br/><br/>
        <textarea className={`form-control bg-${props.bgmode} text-${props.mode}`} rows="12" placeholder='Enter Your Text Here' onChange={changeText} id="mainBox"></textarea>
        <div className="container-fluid bottom-textBox my-2 ">
        <button className="btn btn-outline-danger btn-sm my-2" onClick={clear}>Clear</button>
        <button type="submit" onClick={speak} className="btn btn-outline-warning btn-sm mx-2" id="toggle">Speak</button>
        <div className={`conatiner-fluid mx-3 text-${props.mode} `}>The Above Paragraph Contains: {characters} Character(s), {spaces} Space(s), {word} Word(s) and {line.length} line(s) <p className="text-danger">{warning}</p></div> 
        </div>
      
        
      </div>


      {/* Text Formats */}
      <div className="container-fluid " style={props.myStyle}>
      <div className={`container my-4 cc bg-${props.bgmode} form-control`} >
        <p className='text-warning'> <b>Capitalized Sentence:</b> </p>
        <p className={`text-${props.mode}`} >
            {words} 
        </p>
        <button className="btn btn-outline-warning btn-sm" data-bs-dismiss="alert" onClick={copycc}>Copy Text</button>
        
        </div>
        <div className={`container my-4 cc bg-${props.bgmode} form-control`} >
          <p className='text-warning'> <b>Upper Cased Sentence:</b> </p>
        <p  className={`text-${props.mode}`}>
          {text.toUpperCase()}
        </p>
        <button className="btn btn-outline-warning btn-sm"  onClick={copyuc}>Copy Text</button>
        
        
        </div>
        <div className={`container my-4 cc bg-${props.bgmode} form-control`} >
        <p className='text-warning'> <b>Lower Cased Sentence:</b> </p>
        <p  className={`text-${props.mode}`}>
          {text.toLowerCase()}
        </p>
        <button className="btn btn-outline-warning btn-sm" onClick={copylc}>Copy Text</button>
        
        </div>
        <div className={`container my-4 cc bg-${props.bgmode} form-control`} >
        <p className='text-warning'> <b>Alternating Sentence:</b> </p>
        <p className={`text-${props.mode}`} >
          {altwords} 
        </p>
        <button className="btn btn-outline-warning btn-sm" onClick={copyac}>Copy Text</button>
        
        </div>
        <div className={`container my-4 cc bg-${props.bgmode} form-control`} >
        <p className='text-warning'> <b>Inverse Alternating Sentence:</b> </p>
        <p  className={`text-${props.mode}`}>
         {invaltwords} 
        </p>
        <button className="btn btn-outline-warning btn-sm" onClick={copyiac}>Copy Text</button>
        
        </div>
        </div>
</>
  )
}

import React from 'react'

export default function alert(props) {
  return ( 
    <div className={`alert alert-${props.mode==="dark"?"warning":"dark"} my-3`} id="alertBoxMain" role="alert">
        Text Copied to Clipboard
        <button type="button" className="btn-close" id="dismissButton" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

// UPLOAD INTERFACE COMPONENT

import './UploadForm.css'

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UploadFile( props ) {
  // const [filename, setFilename] = useState('')
  const [file, setFile] = useState([{}])

 
  const uploadFile = async(e) => {
    e.preventDefault()
    console.log('Upload Form Submitted!')

    const formData = new FormData()
    formData.append('file', file)
    
    console.log(file)
    // console.log('formData: ', formData)
    
  }

  return (
    <div id="upload-interface">
      <p>UPLOAD FORM</p>      
      <form enctype="multipart/form-data" onSubmit={uploadFile}>
        <div>
          <input type="file" onChange={e => setFile(e.target.files[0])} required />
        </div>
        <button type="button" type="submit" className="btn btn-primary float-left mt-2">Upload</button>
      </form>
    </div>
  )
}

export default UploadFile
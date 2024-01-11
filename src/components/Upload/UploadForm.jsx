// UPLOAD INTERFACE COMPONENT

import './UploadForm.css'

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UploadForm( props ) {
  const [file, setFile] = useState([{}])

  async function uploadFile() {
    // const formData = new FormData()
    // formData.append('file', file)
    // console.log(file)
    // const res = await axios.post('/api/upload', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    // console.log(res)
  }

  return (
    <div id="upload-interface">
      <p>UPLOAD FORM PLACEHOLDER</p>      
    </div>
  )
}

export default UploadForm
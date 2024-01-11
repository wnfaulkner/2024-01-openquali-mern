// MAIN PAGE

import UploadForm from '../../components/Upload/UploadForm.jsx'
import FileList from '../../components/List/FileList.jsx'

export default function MainPage ({ user, setUser }) {
  return(
    <>
      <h1>MAIN PAGE HEADER</h1>
      <UploadForm />
      <FileList />
    </>
  )
}
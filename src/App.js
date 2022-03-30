import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState({ preview: "", data: "" });
  // const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data);
    axios
      .post("/upload", formData)
      .then((res) => {
        alert("File added successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error occured");
      });
  };

  const handleFileChange = (e) => {
    const fileData = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(fileData);
  };

  // const handleChange = (event) => {
  //   setFile(event.target.files);
  // };
  // console.log(file);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/upload", file)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className='App'>
      <h1 className='text-light text-center'>Files Upload API</h1>
      <form className='form-container clearfix' onSubmit={handleSubmit}>
        <div className='forum-group text-center'>
          <input
            type='file'
            className='form-control'
            name='myFiles'
            onChange={handleFileChange}
          />
          <input
            type='submit'
            className='mt-5 btn btn-success btn-sub'
            value='Upload your file'
          />
        </div>
      </form>
    </div>
  );
}

export default App;

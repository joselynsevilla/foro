import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup,
}
from 'mdb-react-ui-kit';
import {
        BrowserRouter,
        Routes,Switch,
        Route, Link, Router
      } from "react-router-dom";
 
import Button from './Button';
import Pagina2 from './Pagina2';

const rootElement = document.getElementById("root");
function App() {
  {/*
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: 'https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  */}
  return ( 
      <Routes>          
          <Route path="/Pagina2" element={<Pagina2 />} />
          <Route path="/" element={<Button />} />
      </Routes>        
  );
}



export default App;
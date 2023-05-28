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
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const [formValue, setFormValue] = useState({
        fname: '',
        lname: 'https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png',
      
    });
    
    const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const [text1, setText1] = useState('');

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (formValue.fname.trim() !== '' && formValue.lname.trim() !== '') 
    {
        navigate('/pagina2', { state: { value: formValue } });
      } else {
        alert('Por favor, ingresa texto antes de continuar.');
      }
    
  };

  return (
    <MDBContainer className="my-5">
        <MDBCard>
            <MDBRow className='g-0'>
                <MDBCol md='6'>
                    <MDBCardImage src={formValue.lname} alt="login form" className='rounded-start w-100'/>
                </MDBCol>

                <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
                    <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                    <span className="h1 fw-bold mb-0" style={{ color: '#ff6219' }}>Foro</span>
                    </div>

                    <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Ingreso</h5>
            
        
                <MDBValidation className='row g-3'>
                        <MDBValidationItem feedback='No existe valor' invalid>
                        <MDBInput wrapperClass='mb-4' label='¿Cual es su nombre?' size="lg" value={formValue.fname} name='fname' onChange={handleChange} id='validationCustom01' required/>
                        </MDBValidationItem>

                        <MDBValidationItem feedback='No existe valor' invalid>
                        <MDBInput wrapperClass='mb-4' label='Pega una imagen(URL) para tu avatar' size="lg" value={formValue.lname} name='lname' onChange={handleChange} id='validationCustom01' required/>
                        </MDBValidationItem>
                        {/*<MDBBtn  type='submit' className="mb-4 px-5" color='dark' size='lg'>Continuar</MDBBtn>*/}   
                        <MDBBtn type='submit' className="mb-4 px-5" onClick={handleClick}>Continuar</MDBBtn>
                </MDBValidation>
                </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    </MDBContainer>
    
  );
};

export default Button;


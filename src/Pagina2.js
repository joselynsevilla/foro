import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useLocation } from 'react-router-dom';


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
    MDBCardHeader,
    MDBCardTitle,
    MDBCardText,
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import './DiscussionPage.css';
const Pagina2 = () => {

    const location = useLocation();
    const { value } = location.state || {};
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState('');
  const [responses, setResponses] = useState([]);

  const handleTopicSubmit = (event) => {
    event.preventDefault();

    if (currentTopic.trim() !== '') {
      const newTopic = {
        topic: currentTopic,
        responses: [],
      };

      setTopics((prevTopics) => [...prevTopics, newTopic]);
      setCurrentTopic('');
    }
  };

  const handleResponseSubmit = (event, topicIndex) => {
    event.preventDefault();

    if (event.target.response.value.trim() !== '') {
      const newResponse = event.target.response.value;

      setTopics((prevTopics) => {
        const updatedTopics = [...prevTopics];
        updatedTopics[topicIndex].responses.push(newResponse);
        return updatedTopics;
      });

      event.target.reset();
    }
  };

  const handleTopicChange = (event) => {
    setCurrentTopic(event.target.value);
  };

  const handleDownloadJson = () => {
    const jsonData = JSON.stringify(topics, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'discussion_data.json';
    link.click();
  };
  return (
    <MDBContainer className="my-5">
        <MDBCard>
            <br></br>
            <br></br>
            <MDBRow center>
            
                <MDBCol size='8'>
                <MDBCard>
                    <MDBCardBody >
                        <MDBCol style={{textAlign: "center"}}>
                        <Avatar
                                name="Invitado"
                                src={value.lname}
                                size="100"
                                round
                            />
                            <br></br>

                            {value && (
                                    <p><MDBCardTitle>Bienvenid@: {value.fname}</MDBCardTitle></p>    
                            )}
                        </MDBCol>
                        
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
                

          
                
                <div className="discussion-container"> 


                    <div className="topic-form">
                    <MDBCard>
                    <MDBCardHeader style={{textAlign: "center", fontWeight: 'bold'}}>FORO</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                        <form onSubmit={handleTopicSubmit}>
                            <input  type="text"
                                    value={currentTopic}
                                    onChange={handleTopicChange}
                                    placeholder="Ingrese un tema"
                            />
                            <MDBBtn size='sm' type="submit">Enviar Tema</MDBBtn>
                        </form>
                        </MDBCardText>
                        
                    </MDBCardBody>
                    </MDBCard>
                    </div>
      
       
        <MDBCard style={{
            paddingLeft: '25px',
            paddingRight: '25px',
            boxSizing: 'content-box',
        }}>
        <br></br>
        
        <MDBCardTitle style={{fontWeight: 'bold'}}>Temas</MDBCardTitle>
        {topics.length === 0 ? (
          <p>No hay temas de discusión.</p>
        ) : (
        
          <ul>
            {topics.map((topic, index) => (
              <li key={index}className="topic-item">
                <h3 style={{fontWeight: 'bold'}}>{topic.topic}</h3>
                <div className="response-list">
                  <h4>Respuestas:</h4>
                  {topic.responses.length === 0 ? (
                    <p>No hay respuestas todavía.</p>
                  ) : (
                    <ul>
                      {topic.responses.map((response, responseIndex) => (
                        <li style={{fontStyle:'Italic'}} key={responseIndex}>{response}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="response-form">
                  <form onSubmit={(event) => handleResponseSubmit(event, index)}>
                    <label>
                      Escribir respuesta:
                      <input type="text" name="response" />
                    </label>
                    <MDBBtn type="submit">Enviar</MDBBtn>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      
        </MDBCard>
        <br></br>
        <MDBBtn color='success' onClick={handleDownloadJson}>
            <MDBIcon className='me-2' fas icon='download' /> Descargar JSON
        </MDBBtn>                      
    </div>


            </MDBRow>
        </MDBCard>
    </MDBContainer>
    
  );
};

export default Pagina2;


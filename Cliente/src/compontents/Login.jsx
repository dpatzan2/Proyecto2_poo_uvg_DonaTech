import './Login.css'
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://previews.123rf.com/images/elenabsl/elenabsl2005/elenabsl200500008/146948517-caja-de-donaci%C3%B3n-con-ropa-y-zapatos-variados-sobre-fondo-blanco-concepto-de-solidaridad-y-caridad.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <span className="h1 fw-bold mb-0">Donatech</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Ingresa tus credenciales</h5>

                <MDBInput wrapperClass='mb-4' label='Usuario' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Ingresar</MDBBtn>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>No tienes cuenta aun? <a href="./Register.jsx!" style={{color: '#393f81'}}>Registrate aqui</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a className="small text-muted me-1">DonaTech es una aplicación que facilita y organiza las donaciones de cualquier tipo a personas necesitadas. 
                Conecta donantes con receptores de manera eficiente, asegurando transparencia y seguridad en el proceso. Los usuarios pueden buscar donaciones, 
                comunicarse de manera segura y realizar donaciones de dinero, artículos, servicios o tiempo. DonaTech fomenta la solidaridad y la comunidad, 
                haciendo que la ayuda sea más accesible y efectiva.</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;
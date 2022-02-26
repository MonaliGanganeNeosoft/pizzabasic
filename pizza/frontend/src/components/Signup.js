import React from 'react';
import { Form,Button,Row,Col, Container } from 'react-bootstrap';

export default function Signup() {
  const handler=()=>{

  }
  const formSubmit=()=>{

  }
  return (
    <>
    <Container className='mt-3'>
      <h1>Signup</h1>
      <Form id="myForm">
        
        <Form.Group>
          {/* fname,lname in one row */}
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <Form.Control placeholder='first name' name="fname" id="fname" onChange={handler} />
            </Col>
            <Col xs lg="3">
              <Form.Control placeholder='last name' name="lname" id="lname" onChange={handler} />
            </Col>
          </Row>
        </Form.Group>

        {/* for email field */}
        <Form.Group>
          <Row className='justify-content-md-center'>
            <Col xs lg="6">
              <Form.Control type='email' placeholder='Enter email' name='email' id="email" onChange={handler} />
            </Col>
          </Row>
        </Form.Group>
        
        <Form.Group>
        {/* //for password and confirm password in one row */}
          <Row className='justify-content-md-center'>
            <Col xs lg="3">
              <Form.Control type='password' placeholder='Enter password' name="password" id="password" onChange={handler} />
            </Col>
            <Col xs lg="3">
              <Form.Control type='password' placeholder='Confirm password' name="repeatpassword" id="repeatpassword" onChange={handler} />
            </Col>

          </Row>
        </Form.Group>

        <br/>
        
        {/* for submit btn */}
        <Form.Group>
          <Button variant='primary' type="submit" onClick={formSubmit}>Signup</Button>
        </Form.Group>
    
      </Form>
    </Container>
    </>
  )
}


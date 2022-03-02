import React,{useEffect, useState} from 'react'
import { Card,Container, Row } from 'react-bootstrap';
import {getPizzaData} from "../config/Myservice"

function Dashboard() {
  const[prodata,setProdata]=useState([]);
  useEffect(()=>{
    getPizzaData().then((res)=>{
      console.log(res.data)
      if(res.data.err == 0){
        setProdata(res.data.data);
      }
    })
  },[])
  return (
    <>
    <Container className="mt-4">
      <Row xs={6} md={4} className="justify-content-center">
        {prodata.length > 0 && prodata.map((prod,i)=>
          <Card key={i} style={{width:"18rem",margin:"10px"}} className="bg-light bg-gradient">
            <Card.Img variant="top" src={prod.image} className="mt-1 bg-gradient" width="200" height="250"  />
          </Card>)}
      </Row>
    </Container>
    </>
  )
}

export default Dashboard
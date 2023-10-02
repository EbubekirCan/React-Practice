import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ClockLoader } from 'react-spinners'
import PersonCard from './PersonCard'
const PersonInfo = () => {
    const [person, setperson] = useState([])
    const [loading, setloading] = useState(true)



    useEffect(() => {
  }

  
       
getPersonData()
    
    }, [])
    

  return (
    <Container className='mt-4 mb-4 text-center'>
        {loading && <ClockLoader color="#d6363e" /> }

        <Row className='g-5'>
            {
                person.map((item)=><Col key={item.id}>
                    <PersonCard {...item}  />
                </Col>)
            }

        </Row>
    </Container>
  )
}

export default PersonInfo
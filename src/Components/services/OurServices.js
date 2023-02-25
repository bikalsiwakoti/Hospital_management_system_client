import React from 'react';
import './OurServices.css';
import { Row, Col, Card } from 'react-bootstrap';

function OurServices() {
  const services = [
    {
      title: 'Cardiology',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Heart_diagram_blood_flow_en.svg/1200px-Heart_diagram_blood_flow_en.svg.png',
      description: 'Our cardiology team provides comprehensive care for patients with heart conditions, including diagnosis, treatment, and ongoing management of heart disease.'
    },
    {
      title: 'Oncology',
      image: 'https://exumabio.com/wp-content/uploads/2017/12/t-cell.png',
      description: 'Our oncology team is dedicated to providing the highest quality care for patients with cancer, including diagnosis, treatment, and support services'
    },
    {
      title: 'Neurology',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mDLsviICjRD4ZXNoAv8BbRkZy-qWDRGoN9JzxH-RwgOD7BCSogQXixoaB3g0601BHrk&usqp=CAU',
      description: 'Our neurology team specializes in the diagnosis and treatment of conditions affecting the brain and nervous system, including stroke, and multiple sclerosis.'
    },
    {
      title: 'Cardiology',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Heart_diagram_blood_flow_en.svg/1200px-Heart_diagram_blood_flow_en.svg.png',
      description: 'Our cardiology team provides comprehensive care for patients with heart conditions, including diagnosis, treatment, and ongoing management of heart disease.'
    },
    {
      title: 'Oncology',
      image: 'https://exumabio.com/wp-content/uploads/2017/12/t-cell.png',
      description: 'Our oncology team is dedicated to providing the highest quality care for patients with cancer, including diagnosis, treatment, and support services'
    },
    {
      title: 'Neurology',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mDLsviICjRD4ZXNoAv8BbRkZy-qWDRGoN9JzxH-RwgOD7BCSogQXixoaB3g0601BHrk&usqp=CAU',
      description: 'Our neurology team specializes in the diagnosis and treatment of conditions affecting the brain and nervous system, including stroke, and multiple sclerosis.'
    }
  ];

  return (
    <div className="our-services">
      <div className="topicCointainer">
        <div className="heading">
          <h2 className="headerTopic header">Services</h2>
          <p className="headerSecondTopic">
            Access healthcare service anytime from anywhere with Medcare
          </p>
        </div>
      </div>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="service-card">
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OurServices;
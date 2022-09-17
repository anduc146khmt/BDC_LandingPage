import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
import Card from './Card';
const Expertise = (props) => {
  return (
    <div className="service">
      <div className="service__text">
        <h1>Our Service</h1>
      </div>
      <div className="container-fluid" style={{ padding: '50px 0' }}>
        <Row>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            <Card
              image={require('assets/img/brand/DS.png')}
              title="Data Science"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            {' '}
            <Card
              image={require('assets/img/brand/ML.png')}
              title="Machine Learning"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            {' '}
            <Card
              image={require('assets/img/brand/AI.png')}
              title="Artificial Intelligence"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            {' '}
            <Card
              image={require('assets/img/brand/DW.png')}
              title="Data Warehouse"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            {' '}
            <Card
              image={require('assets/img/brand/DA.png')}
              title="Data Analytic"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
          <Col lg="4" style={{ marginBottom: '20px' }}>
            {' '}
            <Card
              image={require('assets/img/brand/Bi.png')}
              title="Data Visualization"
              content="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Expertise;

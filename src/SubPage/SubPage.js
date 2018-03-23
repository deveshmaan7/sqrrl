import React, { Component } from 'react';
import Header from './Component/Header.js';
import {Grid,Row,Col,Button,PageHeader,Carousel} from 'react-bootstrap';
import './SubPage.css';

export default class SubPage extends Component {
  render(){
    return(
      <div>
        <Header />
          <h1 className="header">SIP</h1>
          <hr className="sip-hr"/>
          <p className="para-1">Invest a fixed amount monthly</p>
          <p className="para-2">How much would you like to invest?</p>
          <Carousel className="carousel">
            <Carousel.Item>
              <p className="carousel-item">&#8377;500</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;1000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;2000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;3000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;4000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;5000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;6000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;7000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;8000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;9000</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">&#8377;10000</p>
            </Carousel.Item>
          </Carousel>
          <p className="para-3">for</p>
          <p className="para-4">How long do you want to invest for?</p>
          <Carousel className="carousel">
            <Carousel.Item>
              <p className="carousel-item">Until Stopped</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">3 years</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">2 years</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="carousel-item">1 year</p>
            </Carousel.Item>
          </Carousel>
          <Button href="#" bsSize="large" className="button">&#8594;</Button>
      </div>
    );
  }
}

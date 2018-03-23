import React, { Component } from 'react';
import {Grid,Row,Col,Image,form,FormGroup,FormControl,HelpBlock,ButtonToolbar,Button} from 'react-bootstrap';
import './MainPage.css';
import { Link } from 'react-router';

export default class MainPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }
  render(){
    return(
      <div>
        <Grid>
          <Row className = "image">
            <Col xs={6} md={12} >
              <Image src="assets/money2.svg" height="200" width="200" rounded />
            </Col>
          </Row>
        </Grid>
        <form className="main-form">
          <FormGroup controlId="formBasicText">
            <FormControl
              className="input"
              type="text"
              value={this.state.value}
              placeholder="SIP"
              onChange={this.handleChange}
            />
            <HelpBlock className="helpBlock">As low as Rs 1000/month</HelpBlock>
          </FormGroup>
          <Link to="/SubPage">
            <Button  bsSize="large" className="button">&#8594;</Button>
          </Link>
        </form>
      </div>
);}}

import Carousel from 'react-bootstrap/Carousel';
import {Container,Row, Col,ListGroup} from "react-bootstrap"
import menu from "../data/menu.json"
import { Component } from 'react';


class Home extends Component {

state={
  selectedPasta:menu[0]
}

render(){
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} xl={4} >
          <Carousel className='mt-4' onSlid={(parameter)=>{
            this.setState({selectedPasta:menu[parameter]})
          }} >

            {menu.map((pasta)=>{

              return(
                <Carousel.Item key={pasta.id}>
                 
                <img src={pasta.image} className='w-100'  alt="placekitten" />
                <Carousel.Caption>
                  <h3>{pasta.name}</h3>
                  <p>{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
              )
            })}
   
          </Carousel>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={6} xl={4}>
        <ListGroup className="text-center">

          {
            this.state.selectedPasta.comments.map((review)=>{
              return(
              <ListGroup.Item key={review.id}>{review.author} - {review.comment} - {review.rating}</ListGroup.Item>
              
              )
            })
          }
      
    </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
}
export default Home;

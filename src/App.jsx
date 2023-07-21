import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./components/ItemListContainer"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <>
       <Container className='container'>
      
        <Row>
          <Col> <NavBar /></Col>
        </Row>
      

      
        <Row>
          <Col><ItemListContainer
            greeting="Vuelve a descansar" /></Col>
        </Row>
     
     </Container>
    </>
  )
}

export default App

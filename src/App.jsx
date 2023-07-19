import NavBar from './assets/components/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from './assets/components/CartWidget'
import Container from 'react-bootstrap/Container'
import ItemListContainer from './assets/components/ItemListContainer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <>
   
      <Container className='container'>
        <Row>
        <Col> <NavBar/></Col> 
        <Col><CartWidget/></Col> 
        <Col><ItemListContainer 
        greeting="Vuelve a descansar"/></Col> 
        </Row>
     


      </Container>

    </>
  )
}

export default App

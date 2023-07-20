import React from 'react';
import Container from 'react-bootstrap/Container';
import carritoImg from "../assets/icons8-carrito-de-compras-100.png"


const CartWidget = () => {
  return (
    <Container className='abajoIzq'>

      

      <div>
        <img src={carritoImg} alt="carritoImg"/>

      </div>
      <div>
        <p>5</p>
      </div>
     

    </Container>

    
  )
}

export default CartWidget
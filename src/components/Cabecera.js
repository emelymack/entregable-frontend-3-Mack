import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
  
  return (
    <div>
      <header>
          <Nav activeKey="/">
            <Nav.Item className="me-3 mb-4">
              <Link to="/" className="btn btn-info">Productos</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="btn btn-info">About Us</Link>
            </Nav.Item>
          </Nav>
          <h1>Carrito de compras</h1>
          <p>Cantidad de productos: <span>{props.cantProductos}</span></p>
      </header>

      <Outlet />
    </div>
  )
}

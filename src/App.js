import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import About from "./components/About"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [productos, setProductos] = useState(0);

  const handleCarrito = ()=>{
    setProductos(productos + 1);
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cabecera cantProductos={productos}/>}>
            <Route path="/" element={<Listado agregarACarrito={handleCarrito}/>} />
            <Route path="about" element={<About />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;

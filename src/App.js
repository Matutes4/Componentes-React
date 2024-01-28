import Testimonio from './componentes/testimonio';
import './App.css';
//Archivo principal de JavaScript que crea un componente, la cual va a contener toda la estructura de nuestra aplicación
//archivo principal que reder
//componente funcional
//En react lo que hacemos es que, ciertos componentes renderizan otros componentes, 
//en este caso nuestro componente principal App esta generando a componente testimonio, mostrando así la estructura de nuestra aplicación.
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen algunos fans de Harry Potter:</h1>
      <Testimonio
      nombre="Anónimo"
      pais="España"
      imagen="fans1"
      testimonio="Desde que abrí el primer libro de Harry Potter, supe que mi vida cambiaría para siempre. La magia de J.K. Rowling me envolvió y me llevó a un mundo de aventuras inolvidables. Cada página de la saga es como un hechizo que me transporta a Hogwarts. Los personajes se sienten tan reales que los considero amigos. Gracias a esta historia, mi infancia fue aún más mágica." />
      <Testimonio
      nombre="Anónimo"
      pais="Estados Unidos"
      imagen="fans2"
      testimonio="No importa cuántas veces relea los libros, siempre encuentro algo nuevo en ellos. La lección de amor, amistad y coraje es atemporal. Harry, Hermione y Ron son como amigos de la infancia que nunca envejecen. Esta saga es un tesoro que pasaré a las futuras generaciones"
       />
      <Testimonio
      nombre="Anónimo"
      pais="Francia"
      imagen="fans3"
      testimonio="Harry Potter me enseñó que incluso en los momentos más oscuros, la esperanza y el valor pueden prevalecer. La magia no solo está en los hechizos, sino en las relaciones y las lecciones de vida. Hogwarts es un hogar para todos los que soñamos con un mundo donde la bondad triunfa sobre la oscuridad"
       />
      </div>
    </div>
  );
}

export default App;

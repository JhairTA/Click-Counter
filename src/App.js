import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
import Swal from 'sweetalert2'

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () =>{
    if (numClics !== 0){
      Swal.fire({
        title: 'Reset counter?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, restart!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Restarted!',
            'The counter has been reset.',
            'success'
          )
          setNumClics(0);
        }
      })
    }
  };

  return (
    <div className="App">
      <div className='contenedor'>
        <h1>CLICK COUNTER</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

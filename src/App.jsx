import { useState } from 'react';
import {Formulario} from './components/Formulario';
import {Resultado} from './components/Resultado';
import "./App.css";

function App() {
  const [state, setState] = useState({
      FirstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword:""
    }
  )
  return (
    <div className="App">
      <Formulario entrada={state} setEntrada={setState}/>
      <Resultado datos={state} />
    </div>
  );
}
export default App;

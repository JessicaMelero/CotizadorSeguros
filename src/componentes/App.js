import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {

  cotizarSeguro = (datos) => {
    console.log(datos);
  }

  render() {
    return (
      <div className="contenedor">
        <div className="card">
          <div className="card-header">
            <Header titulo = "Cotizador de Seguro de Auto"/>
          </div>
          <div className="card-body formulario">
            <Formulario cotizarSeguro={this.cotizarSeguro}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';


class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    // Por cada uno menos restar 3% al valor del seguro
    resultado -= ((diferencia*3) * resultado)/100;

    // Americano 15%, Asiatico 5%, Europeo 30% de incremento del valor actual
    resultado = calcularMarca(marca) * resultado;

    // plan del auto, basico incrementa 20% / completa incrementa 50%
    let incrementaPlan = obtenerPlan(plan);
    
    // dependiendo del plan incrementar
    resultado = parseFloat(incrementaPlan * resultado).toFixed(2);

    // crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan : plan,
      year : year
    }

    //ya tenemos el coste
    this.setState({
      resultado : resultado,
      datos : datosAuto
    })
    console.log(resultado);
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
            <Resumen datos={this.state.datos} />
            <Resultado resultado={this.state.resultado}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

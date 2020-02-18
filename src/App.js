import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesParams from './particlesjs-config.json';
import CurrencyRow from './components/CurrencyRow/CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currencyOptions:[],
      fromCurrency:'',
      toCurrency:''
    }
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => this.loadOptions(data));
  }

  loadOptions = (data) => {
    console.log(data);
    this.setState({
      currencyOptions:[ data.base, ...Object.keys(data.rates) ],
      fromCurrency: data.base,
      toCurrency: Object.keys(data.rates)[0]
    });
    console.log(this.state)
  };

  setFromCurrency = (currency) => {
    this.setState({fromCurrency: currency});
    console.log(this.state);
  }
  setToCurrency = (currency) => {
    this.setState({toCurrency: currency});
    console.log(this.state);
  }
  

  render() {

    const { currencyOptions, fromCurrency, toCurrency } = this.state;

    return ( 
        <div className="App">
          <Particles className="particles" params = {particlesParams} />
     
            <h1>Currency Converter</h1>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency} 
              onChangeCurrency={this.setFromCurrency}
              />
            <div className="equals">=</div>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency} 
              onChangeCurrency={this.setToCurrency}
              />
 
            
        </div>
        
    );
  }
}

export default App;

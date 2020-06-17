import React, { useState } from 'react';
import logo from './mintbean.png';
import './styles/index.css';
import Exchangers from './Exchangers.js'

function App() {
  const [quantity, setQuantity] = useState('');
  const [currency, setCurrency] = useState('');
  const [exchange, setExchange] = useState({currency: "none"})

  const onSubmit = (event) => {
    event.preventDefault()
    if (currency === "USD") {
      fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          response = {error: "bad fetch"}
          return response
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setExchange(body)
      })
    } else if (currency === "EU") {
      fetch('https://api.exchangerate-api.com/v4/latest/EUR')
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          response = {error: "bad fetch"}
          return response
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setExchange(body)
      })
    } else if (currency === "INR") {
      fetch('https://api.exchangerate-api.com/v4/latest/INR')
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          response = {error: "bad fetch"}
          return response
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setExchange(body)
      })
    } else if (currency === "CAD") {
      fetch('https://api.exchangerate-api.com/v4/latest/CAD')
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          response = {error: "bad fetch"}
          return response
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setExchange(body)
      })
    }
  }

  const handleChange = (event) => {
    event.preventDefault()
    if(event.currentTarget.id === "quantity") {
      setQuantity(event.currentTarget.value)
    } else if (event.currentTarget.id === "currency") {
      setCurrency(event.currentTarget.value)
    }
  }

  let value = "None yet"
  if (exchange.base) {
    value = exchange.rates.EUR
  }

  return (
    <div className="App">
    <h1> Currency Converter </h1>
            <form onSubmit={onSubmit}>

                      <label>
                            Starting with: 
                            <input
                            className="numberInput"
                            type="number"
                            id="quantity"
                            onChange={handleChange}
                            value={quantity}
                            />
                      </label>
                      <label>
                            <select id="currency" onChange={handleChange} className="startingCurrency">
                              <option value=""></option>
                              <option value="USD">USD</option>
                              <option value="EU">EU</option>
                              <option value="INR">INR</option>
                              <option value="CAD">CAD</option>
                            </select>
                      </label>
                      <input className="button" type="submit" value="Submit" />
            </form>
            <Exchangers
            currency={currency}
            quantity ={quantity}
            rates={exchange.rates}
            />
    </div>
  );
}

export default App;

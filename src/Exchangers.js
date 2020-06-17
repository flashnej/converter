import React, { useState } from 'react';
import logo from './mintbean.png';
import './styles/index.css';

function Exchangers(props) {
  const [newCurrency, setnewCurrency] = useState('')


  const updateCurrency = (event) => {
    setnewCurrency(event.target.value)
  }

  let boxes = [<option key='' value=''> </option>]
  if (props.rates) {
    let countries = Object.keys(props.rates)
    countries.forEach((country) => {
        boxes.push(<option key={country} value={country}>{country}</option>)
    })
  }

  let showValue
  if(newCurrency != "") {
    showValue = parseFloat(props["rates"][`${newCurrency}`]) * props.quantity
  }
  let display
  if (boxes.length != 1) {
    display = <form onChange={updateCurrency}>
      <label> How many
      <select id="currency" className="newCurrency">
        {boxes}
      </select> is that?
      </label>
    </form>
  }

  return (
    <div>
      {display}
      <div className="result">
      {showValue}
      </div>
    </div>
  );
}

export default Exchangers;

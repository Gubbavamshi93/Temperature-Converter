import React, { useState } from 'react';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');
  const [result, setResult] = useState('');

  const convertTemperature = () => {
    const temp = parseFloat(temperature);

    if (isNaN(temp)) {
      setResult('Please enter a valid temperature');
      return;
    }

    let celsius, fahrenheit, kelvin;

    if (scale === 'Celsius') {
      celsius = temp;
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
    } else if (scale === 'Fahrenheit') {
      celsius = ((temp - 32) * 5) / 9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
    } else {
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = temp;
    }

    setResult(`
      Celsius: ${celsius.toFixed(2)} °C
      Fahrenheit: ${fahrenheit.toFixed(2)} °F
      Kelvin: ${kelvin.toFixed(2)} K
    `);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temperature Converter</h1>

      <input
        type="number"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />

      <br /><br />

      <select
        value={scale}
        onChange={(e) => setScale(e.target.value)}
      >
        <option>Celsius</option>
        <option>Fahrenheit</option>
        <option>Kelvin</option>
      </select>

      <br /><br />

      <button onClick={convertTemperature}>
        Convert
      </button>

      <h3 style={{ whiteSpace: 'pre-line' }}>{result}</h3>
    </div>
  );
};

export default App;
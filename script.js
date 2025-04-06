function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');
  
    if (tempInput === '' || isNaN(tempInput)) {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }
  
    const temp = parseFloat(tempInput);
    let resultText = '';
  
    switch (unit) {
      case 'C':
        resultText += `${(temp * 9/5 + 32).toFixed(2)} °F (Fahrenheit)\n`;
        resultText += `${(temp + 273.15).toFixed(2)} K (Kelvin)`;
        break;
      case 'F':
        resultText += `${((temp - 32) * 5/9).toFixed(2)} °C (Celsius)\n`;
        resultText += `${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
        break;
      case 'K':
        resultText += `${(temp - 273.15).toFixed(2)} °C (Celsius)\n`;
        resultText += `${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
        break;
    }
  
    resultDiv.textContent = resultText;
  }
  
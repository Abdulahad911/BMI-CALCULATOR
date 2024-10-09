function calculatingBmi() {
    var weightInput = document.getElementById('weightInput').value
    var heightInput = document.getElementById('heightInput').value;
    var output = document.getElementById('output');
    output.style.display = 'block'
    if (heightInput.trim() === "" || isNaN(heightInput)) {
      return  output.textContent = "Provide a valid Height!";
    }

    else if (weightInput.trim() === "" || isNaN(weightInput)) {
        return  output.textContent = "Provide a valid Weight!";
    }
    Number(weightInput)
    Number(heightInput)
    var bmi = weightInput / (heightInput * heightInput)
    if (bmi < 0){
        output.textContent = "BMI can't be negative"
       }
    if (bmi < 18.5 && bmi > 0){
        return  output.textContent = `Your BMI : (${bmi.toFixed(2)}) You are Underweighted`
    }
    
   else if (bmi >= 18.6 && bmi < 24.9){
     return output.textContent = `Your BMI : (${bmi.toFixed(2)}) Your weight is Normal`
   }
   else if (25 <= bmi && bmi < 29.9){
     return output.textContent = `Your BMI : (${bmi.toFixed(2)}) You are Overweighted`
   }
  
   else {
    return output.textContent = `Your BMI : (${bmi.toFixed(2)}) Your weight is Obesity`
   }
}
function calculatingBmi() {
    var weightInput = document.getElementById('weightInput').value;
    var heightInput = document.getElementById('heightInput').value;
    var output = document.getElementById('output');
    if (heightInput.trim() === "" || isNaN(heightInput)) {
        output.textContent = "Provide a valid Height!";
    }

    else if (weightInput.trim() === "" || isNaN(weightInput)) {
        output.textContent = "Provide a valid Weight!";
    }
    var bmi = weightInput / (heightInput * heightInput)

    if (bmi < 18.5){
        output.textContent = 'hhhhh'
    }

}
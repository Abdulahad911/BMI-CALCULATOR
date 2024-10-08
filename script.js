function calculatingBmi(){
    var weightInput = document.getElementById('weightInput');
    var heightInput = document.getElementById('heightInput');
    var bmi = weightInput.value/(heightInput*heightInput)
    if (weightInput.value.trim() === '' || heightInput.value.trim() === ''){
        return alert("Input text can't be empty")
    }
}
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        let category = ''
        if (bmi < 18.6) {
            category = 'underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal';
        } else {
            category = 'overweight'
        }
        result.innerHTML = `Your bmi is: ${bmi} <p>Category is: <em>${category}</em></p>`
    }
})

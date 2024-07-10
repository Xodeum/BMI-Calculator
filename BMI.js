function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let weightUnit = document.getElementById('weightUnit').value;
    let heightUnit = document.getElementById('heightUnit').value;

    if (weightUnit === 'lbs') {
        weight = lbsToKg(weight);
    }
    if (heightUnit === 'feet') {
        height = feetToMeters(height);
    }

    let bmi = weight / (height * height);
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
}

function lbsToKg(lbs) {
    return lbs * 0.453592;
}

function kgToLbs(kg) {
    return kg / 0.453592;
}

function feetToMeters(feet) {
    return feet * 0.3048;
}

function metersToFeet(meters) {
    return meters / 0.3048;
}

function convertWeight() {
    let weight = parseFloat(document.getElementById('convertWeight').value);
    let fromUnit = document.getElementById('weightConvertFrom').value;
    let toUnit = document.getElementById('weightConvertTo').value;

    let convertedWeight;
    if (fromUnit === 'kg' && toUnit === 'lbs') {
        convertedWeight = kgToLbs(weight);
    } else if (fromUnit === 'lbs' && toUnit === 'kg') {
        convertedWeight = lbsToKg(weight);
    } else {
        convertedWeight = weight;
    }

    document.getElementById('weightResult').innerText = `Converted weight: ${convertedWeight.toFixed(2)} ${toUnit}`;
}

function convertHeight() {
    let height = parseFloat(document.getElementById('convertHeight').value);
    let fromUnit = document.getElementById('heightConvertFrom').value;
    let toUnit = document.getElementById('heightConvertTo').value;

    let convertedHeight;
    if (fromUnit === 'meters' && toUnit === 'feet') {
        convertedHeight = metersToFeet(height);
    } else if (fromUnit === 'feet' && toUnit === 'meters') {
        convertedHeight = feetToMeters(height);
    } else {
        convertedHeight = height;
    }

    document.getElementById('heightResult').innerText = `Converted height: ${convertedHeight.toFixed(2)} ${toUnit}`;
}

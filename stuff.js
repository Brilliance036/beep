function calculate(){
    const temp = parseFloat(document.getElementById('temp').value);
    const result = temp * 1;
    const result2 = temp * 9/5 + 32;
    const result3 = temp + 273.15;
    if (document.getElementById('cel').selected){
        document.getElementById('result').textContent = `${result}°C`;
    }
    else if (document.getElementById('fahren').selected){
        document.getElementById('result').textContent = `${result2}°F`;
    }
    else if (document.getElementById('kel').selected){
        document.getElementById('result').textContent = `${result3}°K`;
    }
}

let Convert = document.getElementById('ConVert');
Convert.addEventListener('click',click);
function click(){
    let amount = document.getElementById('input').value;
    let fCurrency = document.getElementById('FCurrency').value;
    let tCurrency = document.getElementById('TCurrency').value;
    let result;
    result = amount * tCurrency / fCurrency;
    document.getElementById('Result').innerHTML = 'Result: ' + result;
}


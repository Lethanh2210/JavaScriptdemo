
let Convert = document.getElementById('ConVert');
Convert.addEventListener('click',click);
function click(){
    let amount = document.getElementById('input').value;
    let fCurrency = document.getElementById('FCurrency').value;
    let tCurrency = document.getElementById('TCurrency').value;
    if(fCurrency == 'VND' && tCurrency == 'USD'){
        document.getElementById('Result').innerHTML = 'Result: '+ amount/23000 + 'USD';
    }
    if (fCurrency == 'USD' && tCurrency == 'VND'){
        document.getElementById('Result').innerHTML = 'Result: ' + amount * 23000 + 'VND';
    }
}


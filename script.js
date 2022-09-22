function myFunction(){

    var custom = parseFloat(document.getElementById('custom').value);
    var bill = parseFloat(document.getElementById('icon-dollar').value);
    var people = parseFloat(document.getElementById('icon-people').value);
    var pick = document.getElementById('percentage').value;
    

    if(pick === '5%'){
        document.getElementById('demo').innerHTML = bill / people * 0.05;
        
    }
    if(pick === '10%'){
        document.getElementById('demo').innerHTML = bill / people * 0.1;
        
    }
    if(pick === '15%'){
        document.getElementById('demo').innerHTML = bill / people * 0.15;
        
    }
    if(pick === '25%'){
        document.getElementById('demo').innerHTML = bill / people * 0.25;
    }
    if(pick === '50%'){
        document.getElementById('demo').innerHTML = bill / people * 0.5;
    }
    if(pick === 'custom'){
        document.getElementById('demo').innerHTML = bill / people * custom;
    }
}
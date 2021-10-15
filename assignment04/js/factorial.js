function factorial(){
    var fact = 1;
    number = document.getElementById('number').value;
    for(number; number>=1; number--)
    {
        fact = fact * number; 
    }    
    document.getElementById("value").innerHTML = fact;
}   
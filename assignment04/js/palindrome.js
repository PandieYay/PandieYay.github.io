function check(){
    text = document.getElementById('Palindrome').value;
    if (text == text.split('').reverse().join('')){
        document.getElementById("value").innerHTML = "True";
    } else {
        document.getElementById("value").innerHTML = "False";
    }
}   
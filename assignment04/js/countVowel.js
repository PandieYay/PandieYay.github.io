var vowels = "aeiou";
function count(){
    var num = 0;
    text = document.getElementById('text').value;
    for(var i=0; i < text.length; i++){
        if (vowels.indexOf(text[i].toLowerCase()) > -1) {
            num++;
        }
    }
    document.getElementById("vowels").innerHTML = num + " vowels";
}
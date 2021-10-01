function transformUppercase(_val){
    return _val.toUpperCase();
}

// DOM event listener
let ElUsername = document.getElementById("Username")
ElUsername.addEventListener("keyup", function(){
    ElUsername.value = transformUppercase(ElUsername.value)
})

function checkPassword(){
    let ElPassword = document.getElementById("Password")
    let pass_val = ElPassword.value

    if(pass_val.length > 5){
        alert("Password check...OK!")
    } else {
        alert("Password too short!")
    }
}

// Traditional DOM event handler
let elKL = document.getElementById("Username")
elKL.onblur = checkPassword
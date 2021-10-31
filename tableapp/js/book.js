let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    userRemarksVal = userRemarks.value

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
})

function BookNow(userName, userEmail, userPax, userRemarks) {
    let url = 'https://api.sheety.co/d9e6f9ed4f5007d3f561bf9254e38c4c/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            remarks: userRemarks
      }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
        });
}
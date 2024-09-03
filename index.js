function sendMail() {
    var params = {
        fname: document.getElementById("fname").value,
        femail: document.getElementById("femail").value,
        fcontact: document.getElementById("fcontact").value,
        message: document.getElementById("fmessage").value,
    };

    const serviceID = "service_5an8loo"
    const templateID = "template_6h1n6co"

    emailjs .send(serviceID,templateID,params)
    .then (
       res => {
                document.getElementById("fname").value = ""  // clears those fields
                document.getElementById("femail").value = ""
                document.getElementById("fcontact").value = ""
                document.getElementById("fmessage").value = ""
                console.log(res);
                alert("Message sent successfully")
            })

     .catch ((err)=> {
        console.log(err)
        alert("Error sending message")
        })
}

function clear() {
  document.getElementById("fname").value = "";
  document.getElementById("femail").value = "";
  document.getElementById("fcontact").value = "";
  document.getElementById("fmessage").value = "";
}


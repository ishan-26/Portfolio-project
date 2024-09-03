function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_5an8loo"
    const templateID = "template_6h1n6co"

    emailjs .send(serviceID,templateID,params)
    .then (
       res => {
                document.getElementById("name").value = ""  // clears those fields
                document.getElementById("email").value = ""
                document.getElementById("contact").value = ""
                document.getElementById("message").value = ""
                console.log(res);
                alert("Message sent successfully")
            })

     .catch ((err)=> {
        console.log(err)
        alert("Error sending message")
        })
}

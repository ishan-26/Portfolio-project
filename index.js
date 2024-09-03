function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "SERVICE_ID"
    const templateID = "template"

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

       .catch ((err)=> console.log(err))
}
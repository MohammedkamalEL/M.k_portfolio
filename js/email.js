function sendEmail() {
    var params = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        Message: document.getElementById('Message')
    }
    emailjs.send("service_vev24md", "template_eq3p81d", params)
        .then(() => {
            console.log("done");
        }).catch(err => console.log("error is : " + err))
}
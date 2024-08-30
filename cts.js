function SendMail(){
    var mail ={
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email").value,
        message:document.getElementById("Message").value
    }
    emailjs.send("service_n3qinwo","template_n7k0s2x", mail).then(function(res){
        alert("Success" + res.status);
    })
}
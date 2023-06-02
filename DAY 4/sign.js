const button = document.getElementById("mybtn");

button.addEventListener("click", ()=> {
    const emailinput = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const data = {
        email:emailinput,
        password: pass
    }
    fetch("http://localhost:8878/loginn", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now,
            email: emailinput,
            password: pass,
        })
    })
    alert('Account ')
    console.log(emailinput,pass);
});
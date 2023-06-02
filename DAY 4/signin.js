const button = document.getElementById("mybtn");
button.addEventListener("click", ()=>{
    const emailinput = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now,
            email: emailinput,
            password: pass,
        })
    })
    
   
})



//window.location.href()-----to redirect to another html page
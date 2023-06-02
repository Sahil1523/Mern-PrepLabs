const mybtn = document.getElementById("mybtn");
const error = document.getElementById("error");
const success = document.getElementById("success");

mybtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username != "" || password != "") {
        fetch("http://localhost:8878/employees")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const user = data.find(
            item => item.name == username && item.password == password
            );
            if (user) {
            success.innerHTML = "Login sucessfull";
            window.location.href = "assg.html";
            } else {
            error.innerHTML = "Invalid credentials";
            }
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        error.innerHTML = "Please fill all the fields";
    }
});
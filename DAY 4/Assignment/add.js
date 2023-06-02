const add = document.getElementById("submit");
const error = document.getElementById("error");
const success = document.getElementById("success");
add.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const image = document.getElementById("url").value;
  if (
    title != "" ||
    description != "" ||
    image != "" ||
  ) {
    fetch("http://localhost:8878/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        description: desc,
        image: image,
      }),
    }).then((response) => response.json());
    success.innerHTML = "Item added successfully";
    alert("Item added successfully");
    
  }else{
    error.innerHTML = "Please fill all the fields";
    alert("Please fill all the fields");
  }
});
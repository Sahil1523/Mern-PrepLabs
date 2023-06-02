fetch("http://localhost:5500/data",{
    method: "GET",

}).then((response)=>response.json()).then((data)=>{
    console.log(data);
})
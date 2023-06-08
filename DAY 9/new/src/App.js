import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import {useState, useEffect} from "react";


function App() {
  const [arr, setArr] = useState([]);
  const getData = async () =>{
    await fetch ('http://localhost:8080/users',{
        

    })
  }
}

const handlePatch = async(id) =>{
  const updatedName = prompt("");
  await fetch ('http://localhost:8080/users/$(id)',{
    method: "PATCH",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: updatedName,
    }),
  }).then((res)=>{
    if(res.ok){
    alert("Updated name!!");
    getData();
  }
  });

useEffect(()=>{
  
});

return(
        <div className='App'>
            <button onClick={handlePost}>Post</button>
             (arr.map(el) => {
              return(
                image=(el.profile)
                username=(el.name)
                address=(el.address)
                onclick = {}
              )
             })

        </div>
)

//const handlePost = async =>{
//       const obj = {

//       }
//}

export default App;

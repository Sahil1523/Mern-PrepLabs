import React, { useState, useEffect } from 'react';
import Card from './components/card'
const App = () => {   
  const [arr, setArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [PageArr, setPageArr] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [page,setPage] = useState(1);



  const getData = async () => {
      await fetch(
        "https://api.instantwebtools.net/v1/passenger?page=${page}&size=20",
        {
          method: "GET",
        }
      )
      .then((res) => res.json())
      .then((data) => {
        setArr(data.data);
      });
  };

  const handlePage = (el) => {
        setPage(el);
  };
  console.log(page);

  useEffect(() => {
    getData();
  }, [page]);


  return (
    <div className = "App">
            {arr.length>0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  marginTop: "5%"
                }}
                >
                {arr.map((el) => {
                  return(
                    <Card
                      passenger={el.name}
                      image={el.airline[0].logo}
                      title={el.name}
                      country={el.airline[0].country}
                      trips={el.trips}
                    />
                  );
                })}
        </div>
            ) : (
              <h1>No Data Found</h1>
            )}
            {PageArr.map((el) => {
              return <button onClick={() => handlePage(el)}>{el}</button>;
            })}
            </div>
  );
          }

export default App;

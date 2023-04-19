import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
// import Avatar from "./Avatar"
// data function
function createCard(contact){
    return <Card 
    id={contact.id}
    // key={contact.id}
    name={contact.name} 
    email={contact.email}
    phone={contact.company.name}
    website={contact.website}
    address={contact.address.street}
    /> 
}
// Avatar function


function App() {
  const [data, setData] = useState([]);
//   const [avatarData, setAvatarData] = useState([]);



// 1st API call
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users ")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
//   2nd API call
// useEffect(() => {
//     axios.get('https://avatars.dicebear.com/v2/avataaars/satwik.svg')
//       .then(response => {
//         setAvatarData(response.data);
//         console.log(avatarData)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);
  
// return method
  return (
    <div>
      <h1>API Data:</h1>
      {/* <ul> */}
      {data.map(createCard)}
        {/* {data.map(item => ( */}
           {/* // <h1>{item.name}</h1>
        //   <li key={item.id}>
        //     {item.name}
        //     <h3>{item.email}</h3>
        //     <h3>{item.phone}</h3>
        //     <h3>{item.company.name}</h3>
        //     <h3>{item.website}</h3>
        //     <h3>{item.address.street}</h3>
        //   </li> */}
        {/* ))} */}
      {/* </ul> */}
    </div>
  );
}

export default App;

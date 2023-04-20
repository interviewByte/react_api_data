import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'

function App() {
  const [data, setData] = useState([]);

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
// avatar imagr
  const getAvatarURL = (username) => {
    return `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
  };
  return (
    <div>
    {data.map(user => (
      <div key={user.id}>
        <Card 
          img={getAvatarURL(user.name)}
          name={user.name} 
          email={user.email}
          phone={user.phone}
          company={user.company.name}
          website={user.website}
          address={user.address.street}
        />
      </div>
    ))}
  </div>
  );
}
export default App;

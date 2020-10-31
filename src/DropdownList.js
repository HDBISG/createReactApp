import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);

  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  );
};


const App =() => {
  const [personName, setPersonName] = React.useState([]);

  const onTargetIdentityChange = (event) => {
    setPersonName(event.target.value ); // its undefined always 
  }
  
  const splitedIdenties = { 
   'abc1' :[{ id: 12, age: '2' },{ id: 13, age: '3' }], 
   'abc2': [{ id: 14, age: '22' },{ id: 15, age: '25' }] 
  };

  var countryListSession = [{ctyCode:"ab",ctyDescription:"aabb"},{ctyCode:"abc",ctyDescription:"aabbcc"}  ];


  return (
    <div>

    <Select 
      label="Network"
      labelId="Network"
      id="Network"
      value={personName}
      onChange={onTargetIdentityChange}>

      {
      countryListSession.map( (item, index) => (
        <MenuItem key={index} value={item.ctyCode} >{item.ctyDescription} </MenuItem>
      ) )
      }

    </Select >
    </div>
  );

}

export default App;
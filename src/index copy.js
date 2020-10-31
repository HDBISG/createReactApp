import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from '@material-ui/core/ListSubheader';
import Demo from './demo';

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


function App() {
  const [show, setShow] = useState("1");
  const [personName, setPersonName] = React.useState([]);

  var countryListSession = [{ctyCode:"ab",ctyDescription:"aabb"},{ctyCode:"abc",ctyDescription:"aabbcc"}  ];

  const onTargetIdentityChange = (event) => {
    // setPersonName(event.target.value ); // its undefined always 
  }

  return ( <Select 
    label="Network"
    labelId="Network"
    id="Network"
    value={personName}
    onChange={onTargetIdentityChange}>
      <div key="a">
        <ListSubheader>a</ListSubheader>
        {
        countryListSession.forEach( (item, index) => (
          <MenuItem key={index} value={item.ctyCode} >{item.ctyCode} </MenuItem>
        ) )
        }
        </div>
    {
     countryListSession.forEach( (item, index) => (
      console.log( item, index )
    ) )
    }
  </Select > );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

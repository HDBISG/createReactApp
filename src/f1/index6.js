import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  //Define State
  const [name, setName] = useState({firstName: 'name', surname: 'surname'});
  const [title, setTitle] = useState('BIO');
  
  useEffect(() => {
    setName({ ...name, FirstName: 'Shedrack', surname: 'Akintayo'})
    setTitle('My Full Name')
  }, []);

  return(
      <div>
          <h1>Title: {title}</h1>
          <h3>Name: {name.firstName}</h3>
          <h3>Name: {name.FirstName}</h3>
          <h3>Surname: {name.surname}</h3>
      </div>
  );
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

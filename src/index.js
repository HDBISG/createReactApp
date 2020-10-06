import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// Class component
class Parent extends React.Component {
  render () {
   return(
     <div>
      <Child eyeColor={'blue'} />
      <p> line </p>
      <Child1 eyeColor={'yellow'} />
    </div>
   )
  }
 }// Functional component
 const Child = ( props ) => {
   return (
     <span style={{backgroundColor: props.eyeColor}}  > child </span>
   )
 }

 let Child1 = function ( props) {
  return (
    <span style={{backgroundColor: props.eyeColor}}  > child one </span>
  );
 }

ReactDOM.render(
    <Parent />,
  document.getElementById('root')
)

import React, { Component } from 'react'
import './Comp.css'
export default class PersonalInfo extends Component {
  render() {
    return (
      <div className='p'>
        <h2>Personal Information:</h2>
        
       <p>Name:Ali</p>
       <p>Surname:Narimanov</p>
       <p>Age:21</p>
       <p>Place of Pesidence:Baku</p>
      </div>
    )
  }
}

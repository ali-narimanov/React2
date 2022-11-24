import React, { Component } from 'react'
import Contacts from './Contacts'
import Experiance from './Experiance'
import PersonalInfo from './PersonalInfo'
import './Comp.css'

export default class UserCV extends Component {
  render() {
    return (
      <>


      <div className='main'>
        <h1>UserCV</h1>
        <PersonalInfo />
        <Experiance />
        <Contacts />


</div>


      </>
    )
  }
}

import React, { Component } from 'react';
import './App.css';
import {
  withAuthenticator
} from 'aws-amplify-react';

import { API, graphqlOperation } from 'aws-amplify'

const query = `
  query {
    listAnimals {
      items {
        id name description location 
      }
    }
  }
  `

class App extends Component {
  state = { animals: [ ] }
  async componentDidMount(){
   const data = await API.graphql(graphqlOperation(query)) 
    this.setState({
      animals: data.data.listAnimals.items
    })
 }

  render() {

  return ( 
    <div className = "App" >
    <header className = "App-header" >
     <p> My list of pets: </p> 
     {
       this.state.animals.map((animal, index ) => (
         <p key={index}>{animal.name}:  {animal.description}</p>
       ))
     }
     </header>
     </div>
  );
}
} 

export default withAuthenticator(App, { includeGreetings: true } )
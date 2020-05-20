import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}));
}

handleChange = (e) =>{
  this.setState({searchField: e.target.value})
}
  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <input type='search' placeholder='search monsters' onChange={ this.handleChange}/>
        <CardList monsters = {filteredMonsters}>
           { this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
        </CardList>
      </div>
    );
  }
}

export default App;

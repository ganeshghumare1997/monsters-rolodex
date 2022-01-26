import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  handleChange = e => this.setState({searchField : e.target.value});

  render(){
    const { monsters, searchField }= this.state ;
    const filteredMosters = monsters.filter( monster =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App">
        <h1 className='App-header'>Monster Rolodex</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange}></SearchBox>
        <CardList monsters = {filteredMosters}></CardList>
      </div>
    );
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({monsters : users})
    })
  }
}

export default App;
import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
// import Glyphicon from 'react-bootstrap'
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
    fetch(`${BASE_URL}${this.state.query}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('book items', json);
        let { items } = json;
        this.setState({ items });
      })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Book Explorer</h2>

        <input
          type="text"
          placeholder="Search for a Book"
          onChange={event => { this.setState({ query: event.target.value }) }}
          onKeyPress={event => {
            this.search()
          }}
        />
        <p onClick={() => this.search()} />

        <Gallery items={this.state.items} />
      </div>
    )
  }
}

export default App;
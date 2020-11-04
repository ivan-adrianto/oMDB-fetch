import React, { Component } from 'react'
import GetMovie from './GetMovie'

class App extends Component {
  constructor(){
    super();
    this.state={
      keyword: '',
      data:[],
      isLoading: false
    }
  }

  clicked = () => {
    this.setState({
      isLoading:true
    })
    fetch(`http://www.omdbapi.com/?apikey=6d1f3e3e&s=${this.state.keyword}` )
    .then(response=>response.json())
    .then(result=>this.setState({
      data:result.Search,
      isLoading: false
    }))
  }

  submit = (event) => {
    event.preventDefault(); 
    this.setState({
      keyword:event.target.value
    })
  }

  render() {
    console.log(this.state.data.Search)
    return (
      <div>
        <input onChange={this.submit}type='text' ></input>
        <button onClick={this.clicked} type='submit'>Cari</button>
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading && <GetMovie data={this.state.data}/>}

      </div>
    )
  }
}

export default App
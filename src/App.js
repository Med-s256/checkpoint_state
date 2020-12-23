import './App.css';

import React, { Component } from 'react'

class App extends Component {
  state = {
    Person: {
      fullName: 'Mohamed Skib', bio: 'my Cv',
      imgSrc: 'https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg', profession: 'technical employee'
    },show: false, seconds: 0, minutes: 0, hours: 0};

  toggleApp = () => {
    const currentShow = this.state.show;
    this.setState({ show: !currentShow })
  }
  componentDidMount() {
    
    setInterval(() =>{ if(this.state.seconds<59)
      this.setState((prevsec) => ({
        seconds: prevsec.seconds+ 1 
      })) 
      else 
      this.setState({seconds:0})
    }, 1000); 
    
    setInterval(() => { if(this.state.minutes<59)
      this.setState((prevsec) => ({

        minutes: prevsec.minutes+ 1
      }))
      else
      this.setState({minutes:0})
    }, 60000);
    setInterval(() => {
      this.setState((prevsec) => ({

        hours: prevsec.hours + 1
      }))
    }, 3600000);
  }
  render() {
    
    let content = null;
    if (this.state.show) {
      content = <div>
        <h1>{this.state.Person.fullName}</h1>
        <h3>{this.state.Person.bio}</h3>
        <img src={this.state.Person.imgSrc} width='300px' height='300px' />
      </div>
  
    }
    return (
      <div className='App'>
        <p>{String(this.state.hours).padStart(2,0)}:{String(this.state.minutes).padStart(2,0)}:{String(this.state.seconds).padStart(2,0)}</p>
        <button onClick={this.toggleApp}>{this.state.show ? 'Hide' : 'Afficher'}</button>
        {content}

      </div>
    )
  }
}

export default App


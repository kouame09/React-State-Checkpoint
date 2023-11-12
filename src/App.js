// App.js
import React, { Component } from 'react';
import PersonComponent from './PersonComponent';
import TimerComponent from './TimerComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Evra Tuo',
        bio: 'Expert en Marketing Digital',
        imgSrc: 'https://images.pexels.com/photos/10376250/pexels-photo-10376250.jpeg?auto=compress&cs=tinysrgb&w=600',
        profession: 'Marketeur',
      },
      show: false,
      interval: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    return (
      <div>
        <button className='button' onClick={this.toggleShow}>Basculer l'affichage</button>
        {this.state.show && <PersonComponent person={this.state.person} />}
        <TimerComponent interval={this.state.interval} />
      </div>
    );
  }
}

export default App;

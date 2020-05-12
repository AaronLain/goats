import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  goatBuilder() {
    const goats = goatData.getGoats();
    goats.forEach((goat) => {
      console.error(goat);
    });
  }

  render() {
    return (
      <div className="App">
        <h2>HELLO THERE</h2>
        <button className="btn btn-info">DING DONG</button>
        <GoatCoral goats={ this.state.goats }/>
      </div>
    );
  }
}

export default App;

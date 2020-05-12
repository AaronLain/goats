import React from 'react';
import './GoatCoral.scss';

class GoatCoral extends React.Component {
  render() {
    console.error('goats?', this.props.goats);
    const makeGoats = this.props.goats.map((goat) => (
      <h3>{goat.name}</h3>
    ));
    return (
      <div className="GoatCoral">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;

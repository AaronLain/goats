import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;

    return (
      <div className="Goat col-3">
        <div className="card">
          <img className="card-img-top" src={goat.imgUrl} alt="Card of Goat" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">Beard Length: {goat.beardLength}</p>
            <p className="card-text">Color: {goat.color}</p>
            <p className="card-text">Are They Busy?: {goat.isBusy}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;

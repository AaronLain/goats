import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    useAGoat: PropTypes.func.isRequired,
    freeAGoat: PropTypes.func.isRequired,
  }

  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    const { goat, freeAGoat } = this.props;
    e.preventDefault();
    freeAGoat(goat.id);
  }

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
            <div className="card-footer">
              {
                goat.isBusy ? (
                  <button className="btn btn-success" onClick={this.freeGoatEvent}>Free this Goat!</button>
                ) : (
                  <button className="btn btn-warning" onClick={this.useGoatEvent}>Use this Goat!</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;

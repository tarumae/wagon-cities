import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions'

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return <div onClick={this.handleClick}>
      <p className="list-group-item">{this.props.city.name}</p>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(City);
import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTagged: false,
    }
  }

  onItemClicked = () => {
    this.setState({isTagged: true});

    if (this.props.type === "litter") {
      this.props.updatePointsCallback();
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const item = this.props.type
    const icon = ItemIcons[item]

    let iconCheck = ""

    if (this.state.isTagged) {
      this.props.type === "litter" ? iconCheck = "spotted-litter" : iconCheck = "spotted-nature";
    }

    return (
      <div className={`game-item ${iconCheck}`} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onItemClicked}></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;

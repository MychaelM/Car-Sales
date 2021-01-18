import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from "../actions/addedFeatureActions";


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={() => props.removeFeature({price: props.feature.price, feature: props.feature})}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    name: state.car.features
  }
}

const mapDispatchToProps = { removeFeature }

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);

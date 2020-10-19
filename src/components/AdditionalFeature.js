import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/addedFeatureActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button"
      onClick={() => props.addFeature({id: props.feature.id, item: props.feature})}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  // console.log("State from Additional Features", state.additionalFeatures);
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

const mapDispatchToProps = { addFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);

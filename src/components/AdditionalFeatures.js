import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from "../actions/addedFeatureActions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("State from Additional Features", state.additionalFeatures);
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

const mapDispatchToProps = { addFeature };

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);

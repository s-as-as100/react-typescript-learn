import React from "react";
import PropTypes from 'prop-types'
const PropTypeComponent = ({ name, number }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{number}</h2>
    </div>
  );
};

PropTypeComponent.propTypes = {
    name:PropTypes.string,
    number:PropTypes.number
}
export default PropTypeComponent;

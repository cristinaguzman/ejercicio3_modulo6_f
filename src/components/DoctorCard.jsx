import React from "react";
import PropTypes from "prop-types";

const DoctorCard = ({ name, specialty }) => (
  <div>
    <h3>{name}</h3>
    <p>Especialidad: {specialty}</p>
  </div>
);

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
};

export default DoctorCard;

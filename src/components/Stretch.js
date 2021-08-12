import React from "react";
import PropTypes from 'prop-types';
import Stretch from './Stretch';
import "./stretch.css";

export default function Stretchy({title: {title}}) {
  return (
    <div>jhfjhfgjhfjhf</div>
    // <a href="#" class="button">
    //   <canvas class="button__canvas"></canvas>
    //   <span class="button__text">Hover me I am liquid</span>
    // </a>
  );
};

Stretch.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })
}
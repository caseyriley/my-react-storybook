import React from "react";
import PropTypes from 'prop-types';
import Stretch from './Stretch';
import "./stretch.css";
import "./StretchJS"

export default function Stretchy({title: {title}}) {
  return (
<a href="/" class="btn-liquid">
		<span class="inner">{title}</span>
</a>
  );
};

Stretch.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })
}
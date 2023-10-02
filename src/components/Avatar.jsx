import PropTypes from "prop-types";

import styles from './Avatar.module.css';

export function Avatar({src, hasBorder}) {
  return (
    <img className={
      hasBorder
        ? styles.avatarWithBorder
        : styles.avatarWithoutBorder
    } src={src} alt=""/>
  )
}

Avatar.prototype = {
  src: PropTypes.string,
  hasBorder: PropTypes.bool,
}

Avatar.defaultProps = {
  hasBorder: true,
}
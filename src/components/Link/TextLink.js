import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const TextLink = ({ children, to, className }) => {
  return (
    <Link
      className={`no-underline font-medium hover:opacity-50 ${className}`}
      activeClassName={
        'font-black cursor-default hover:no-underline hover:opacity-100 cursor-default'
      }
      to={to}
    >
      {children}
    </Link>
  );
};

export default TextLink;

TextLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

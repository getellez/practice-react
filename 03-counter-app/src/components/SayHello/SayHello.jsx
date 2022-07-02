import React from 'react'
import PropTypes from 'prop-types';

export const SayHello = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="mytestid">Hola, { name }!</h1>
      <h2> { title } </h2>
      <small>{ subtitle }</small>
    </>
  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

SayHello.defaultProps = {
  name: 'Germán',
  title: 'Learning React',
  subtitle: 'The most popular frontend library',
}
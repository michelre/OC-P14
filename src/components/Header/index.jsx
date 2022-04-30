//@ts-check

import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {String} props.h1
 * @param {String} props.class  // Optional
 * @returns {React.ReactElement}
 */
function Header(props) {
  return (
    <header className={props.class}>
      <h1>{props.h1}</h1>
    </header>
  )
}

export default Header

Header.propType = {
  h1: PropTypes.string.isRequired,
  class: PropTypes.string,
}

Header.defaultProps = {
  h1: 'My title',
}

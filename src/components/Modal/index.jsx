//@ts-check

import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {Boolean} props.isOpen
 * @param {String} props.content
 * @param {Function} props.setOpen
 * @returns {React.ReactElement}
 */

function Modal(props) {
  return (
    <div className={`modalContainer ${props.isOpen ? '' : 'close'}`}>
      <div id={'confirmation'} className={'modal'}>
        {props.content}
        <span className={'close-modal'} onClick={() => props.setOpen(false)}>
          Close
        </span>
      </div>
    </div>
  )
}

export default Modal

Modal.propType = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
}

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

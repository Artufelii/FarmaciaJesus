import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Modal.css'

const Modal = ({ children, isOpen, setIsOpen }) => {
  return(
    isOpen ? 
      <div className='Modal'>
        <div className='Modal__children'>
          <div 
            onClick={() => setIsOpen(false)} 
            className='Modal__close'
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          { children }
        </div>
      </div>
    : null
  )
}

export default Modal

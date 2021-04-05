import '../index.css';
import close from '../images/close.svg'

function PopupWithForm(props) {
    return(
    <div className={props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}>
        <div className="popup__content">
          <img src={close} alt="" className="popup__close popup__close_place" onClick={props.close}/>
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" name={props.name} noValidate>
            {props.children}
          </form>
        </div>
      </div>
    )
}

export default PopupWithForm;
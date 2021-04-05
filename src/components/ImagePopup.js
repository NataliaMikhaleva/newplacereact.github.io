import '../index.css';
import close from '../images/close.svg';

function ImagePopup(props) {
  if (props.card == undefined) {return null}
    return(
    <div className={props.card !==undefined ? "popup-card popup-card_is-opened" : "popup-card"}>
        <div className="popup-card__content">
          <img src={close} alt="" className="popup__close" onClick={props.close}/>
          <div className='popup-card__image' style={{backgroundImage: `url(${props.card.link})`}}></div>
      </div>
    </div>    
    )
}

export default ImagePopup;
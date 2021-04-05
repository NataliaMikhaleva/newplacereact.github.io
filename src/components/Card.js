import React from 'react';
import '../index.css';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      } 
      return(         
           <div className="place-card" key={props.card.id} id='card._id'>
             <div className="place-card__image" style={{backgroundImage: `url(${props.card.link})` }} onClick={handleClick} >
               <button className="place-card__delete-icon"></button>
             </div>
             <div className="place-card__description">
               <h3 className="place-card__name">{props.card.name}</h3>
               <div className='place-card__like'>
                 <button className="place-card__like-icon"></button>
                 <p className='place-card__likeAmount'>{props.card.likes.length}</p>
               </div>
             </div>
           </div>
      )
    
}

export default Card;
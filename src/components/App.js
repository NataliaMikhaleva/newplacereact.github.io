
import React from 'react';
import '../index.css';
import Header from'./Header';
import Main from'./Main';
import PopupWithForm from'./PopupWithForm';
import ImagePopup from'./ImagePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }

  return (
    
    <div className="root">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} handle={handleCardClick}/>

    <PopupWithForm name='new' title='Новое место' isOpen={isAddPlacePopupOpen} close={closeAllPopups} children={
      <> 
      <div className="input-container">
        <input type="text" name="name" className="popup__input popup__input_type_name popup__was-clicked"  required placeholder="Название"/>
        <span id="error-name" className="error-message"></span>
      </div>
      <div className="input-container">
        <input type="url" name="link" className="popup__input popup__input_type_link-url popup__was-clicked" required placeholder="Ссылка на картинку"/>
        <span id="error-link" className="error-message"></span>
      </div>
        <button className="button popup__button">+</button> 
      </>
          }/>

<PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} close={closeAllPopups} children={ 
   <> 
      <div className="input-container">
            <input type="text" name="username" className="popup__input popup__input_type_text popup__was-clicked" required placeholder="Имя"/>
            <span id="error-username" className="error-message"></span>
          </div>
          <div className="input-container">
            <input type="text" name="userinfo" className="popup__input popup__input_type_userinfo popup__was-clicked" required placeholder="О себе"/>
            <span id="error-userinfo" className="error-message"></span>
          </div>
          <button className="button popup__button popup__button_edit">Сохранить</button>
   </>
}/>


  <ImagePopup card={selectedCard} close={closeAllPopups}/>


  <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} close={closeAllPopups} children={ 
   <> 
      <div className="input-container">
        <input type="url" name="avatarlink" className="popup__input popup__input_type_link-url popup__was-clicked" required placeholder="Ссылка на аватар"/>
        <span id="error-username" className="error-message"></span>
      </div>
      <button className="button popup__button popup__button_edit popup__button_avatar">Сохранить</button>
   </>
}/>
  
  </div>
  
  );
}

export default App;

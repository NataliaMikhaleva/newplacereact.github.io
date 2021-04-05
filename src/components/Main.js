import React from 'react';
import '../index.css';
import api from '../utils/Api';
import Card from '../components/Card';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    function getDefauitUserInfo() {
      api.getUserInfo().then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
      
    }
    getDefauitUserInfo();
  })

 React.useEffect(() => {
   function getCards() {
    api.getInitialCards().then((res) => {
      const newCards = Array.from(res);
      setCards([...newCards]);
        })
        .catch((err) => {
          console.log(err);
        })
   }
   getCards();
   
 }, [])

    return(
    
     <>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{userName}</h1>
          <p className="user-info__job">{userDescription}</p>
          <button className="button-edit user-info__button-edit" onClick={props.onEditProfile}>Edit</button>
        </div>
        <button className="button user-info__button" onClick={props.onAddPlace}>+</button>
      </div>
    </div>
     <div className="places-list root__section">
     {cards.map((card)=> {
      return <Card card={card} onCardClick={props.handle}/>
     })}
    </div> 
    </>
    )
}

export default Main;
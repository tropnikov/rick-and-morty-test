import './Card.css';
// import { useContext } from 'react';
// import CardsContext from '../../context/CardsContext';

function Card({ date, title, episode }) {
  // const cards = useContext(CardsContext);

  return (
    <div className="Card">
      <p className="Card__title">{title}</p>
      <p className="Card__date">{date}</p>
      <p className="Card__episode">{episode}</p>
    </div>
  );
}
export default Card;

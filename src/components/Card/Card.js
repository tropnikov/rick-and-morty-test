import './Card.css';
// import { useContext } from 'react';
// import CardsContext from '../../context/CardsContext';

export const Card = ({ date, title, episode }) => {
  // const cards = useContext(CardsContext);

  return (
    <div className="Card">
      <p className="Card__episode">{episode}</p>
      <p className="Card__title">{title}</p>
      <p className="Card__date">{date}</p>
    </div>
  );
};

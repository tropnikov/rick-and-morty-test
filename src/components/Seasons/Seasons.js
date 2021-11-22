import './Seasons.css';
import { Season } from '../Season/Season';

export const Seasons = ({ cards }) => {
  const cardsObj = {};
  cards.forEach((item) => {
    if (!cardsObj[item.episode.slice(1, 3)]) {
      cardsObj[item.episode.slice(1, 3)] = [];
    }
    cardsObj[item.episode.slice(1, 3)].push(item);
  });
  return (
    <>
      {Object.keys(cardsObj).map((item) => {
        return (
          <li className="Seasons">
            <Season title={item} episodes={cardsObj[item]} />
          </li>
        );
      })}
    </>
  );
};

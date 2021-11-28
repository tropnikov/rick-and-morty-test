import { useParams } from 'react-router-dom';
import './Episode.css';
// import { api } from '../../api/api';
import { Character } from '../Character/Character';

export const Episode = ({ cards }) => {
  const { episodeId } = useParams();
  const episode = cards.find((item) => item.episode === episodeId);
  console.log(episode);
  console.log(episodeId);
  // episode, name, air_date, characters;
  return (
    <div className="Episode-content">
      <div className="Episode-info">
        <p className="Episode-episode-number">{episode.episode}</p>
        <p className="Episode-title">{episode.name}</p>
        <p className="Episode-air-date">{episode.air_date}</p>
      </div>
      <p className="Episode-characters">Characters:</p>
      <ol className="Episode-characters-list">
        {episode.characters.map((item) => {
          return (
            <li className="Episode-character">
              <Character linkToCharacter={item} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';
import './Season.css';

export const Season = (props) => {
  return (
    <>
      <p className="Season-title">{`Season ` + props.title}</p>
      <ol className="Season-episodes-list">
        {props.episodes.map((item) => {
          return (
            <li>
              <Link className="Season-link-to-card" to={item.episode}>
                <Card
                  key={item.id}
                  number={item.id}
                  date={item.air_date}
                  title={item.name}
                  episode={item.episode}
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

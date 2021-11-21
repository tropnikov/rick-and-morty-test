import Card from '../Card/Card';
import './Season.css';

function Season(props) {
  return (
    <li>
      <p>{props.title}</p>
      <ol className="Season-list">
        {props.episodes.map((item) => {
          return (
            <li>
              <Card
                key={item.id}
                number={item.id}
                date={item.air_date}
                title={item.name}
                episode={item.episode}
              />
            </li>
          );
        })}
      </ol>
    </li>
  );
}

export default Season;

import Card from '../Card/Card';
import './Season.css';

function Season(props) {
  return (
    <>
      <p className="Season-title">{`Season ` + props.title}</p>
      <ol className="Season-episodes-list">
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
    </>
  );
}

export default Season;

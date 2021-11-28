import './Main.css';
import { Input } from '../Input/Input';
import { Seasons } from '../Seasons/Seasons';

export const Main = ({ filter, handleChange, filteredCards }) => {
  return (
    <div className="Main-content">
      <div className="Main-search">
        <Input
          value={filter}
          placeholder="Fast filter by episode title"
          handleChange={handleChange}
        />
      </div>
      <ul className="Main-cards">
        <Seasons cards={filteredCards} />
      </ul>
    </div>
  );
};

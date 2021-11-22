import './App.css';
import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input';
import { api } from '../../api/api';
// import Card from '../Card/Card';
import CardsContext from '../../context/CardsContext';
// import Season from '../Season/Season';
import { Button } from '../Button/Button';
import { Seasons } from '../Seasons/Seasons';

const App = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    api.getAllEpisodes().then((res) => {
      setCards(res);
      // console.log(res);
    });
  }, []);

  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };

  // useEffect(() => {
  const filteredCards = !filter
    ? cards
    : cards.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
  console.log(filteredCards);
  // }, [filter]);

  return (
    <CardsContext.Provider value={cards}>
      <div className="App">
        <h1 className="App-title">Rick and Morty episodes catalogue</h1>
        <div className="App-content">
          <div className="App-search">
            <Input
              value={filter}
              placeholder="Введите название"
              handleChange={handleChange}
            />
            <Button title="Поиск" />
          </div>
          <ul className="App-cards">
            <Seasons cards={filteredCards} />
          </ul>
        </div>
      </div>
    </CardsContext.Provider>
  );
};

export default App;

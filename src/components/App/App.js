import './App.css';
import React, { useState } from 'react';
import Input from '../Input/Input';
import api from '../../api/api';
// import Card from '../Card/Card';
import CardsContext from '../../context/CardsContext';
import Season from '../Season/Season';
import Button from '../Button/Button';

const App = () => {
  const [cards, setCards] = useState({});
  const cardsObj = {};
  React.useEffect(() => {
    api.getAllEpisodes().then((res) => {
      res.forEach((item) => {
        if (!cardsObj[item.episode.slice(0, 3)]) {
          cardsObj[item.episode.slice(0, 3)] = [];
        }
        cardsObj[item.episode.slice(0, 3)].push(item);
      });
      setCards(cardsObj);
      // console.log(cards);
    });
  }, []);
  return (
    <CardsContext.Provider value={cards}>
      <div className="App">
        <h1 className="App-title">Rick and Morty episodes catalogue</h1>
        <div className="App-content">
          <div className="App-search">
            <Input placeholder="Введите название" />
            <Button title="Поиск" />
          </div>
          <ul className="App-cards">
            {Object.keys(cards).map((item) => {
              return (
                <li className="App-season">
                  <Season title={item} episodes={cards[item]} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </CardsContext.Provider>
  );
};

export default App;

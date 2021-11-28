import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import './Character.css';

export const Character = ({ linkToCharacter }) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    api.getCharacterInfo(linkToCharacter).then((res) => {
      setPerson(res);
      console.log(res);
    });
  }, []);
  // console.log(api.getCharacterInfo(linkToCharacter));
  // console.log(linkToCharacter);
  // console.log(name);
  // console.log(image);
  return (
    <div className="Character-content">
      <img className="Character-image" src={person.image} alt="" />
      <p className="Character-name">{person.name}</p>
    </div>
  );
};

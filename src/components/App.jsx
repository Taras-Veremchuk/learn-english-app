import Header from './Header/Header';
import { useState } from 'react';
import { WordForm } from './WordForm/WordForm';
import { WordList } from './WordsList/WordsList';

export const App = () => {
  const [words, setWords] = useState([]);

  const addWord = word => {
    console.log(word);
    setWords(prevState => {
      return [...prevState, word];
    });
  };
  return (
    <div>
      <Header />
      <WordForm addWord={addWord} />
      <WordList words={words} />
    </div>
  );
};

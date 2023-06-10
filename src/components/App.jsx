import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';

export const App = () => {
  const [words, setWords] = useLocalStorage('words', []);
  const [filter, setFilter] = useState('');

  const addWord = word => {
    setWords(prevState => [...prevState, word]);
  };
  const deleteWord = e => {
    const { id } = e.target;
    setWords(prevState => prevState.filter(word => word.id !== id));
  };

  const onFilterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const toggleChecked = id => {
    setWords(prevState =>
      prevState.map(word => {
        if (word.id === id) {
          return { ...word, checked: !word.checked };
        }
        return word;
      })
    );
  };

  const checkAllWords = status => {
    if (status === 'check') {
      setWords(prev =>
        prev.map(item => ({
          ...item,
          checked: true,
        }))
      );
      return;
    }
    setWords(prev =>
      prev.map(item => ({
        ...item,
        checked: false,
      }))
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                words={words}
                filter={filter}
                addWord={addWord}
                deleteWord={deleteWord}
                onFilterChange={onFilterChange}
                toggleChecked={toggleChecked}
                checkAllWords={checkAllWords}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                toggleChecked={toggleChecked}
                words={words}
                quizWords={words.filter(word => word.checked)}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

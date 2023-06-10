import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';

export function GameComponent({
  words,
  quizWords,
  getRandomIntegetFromInterval,
  toggleChecked,
}) {
  const [allWords, setAllWords] = useState(quizWords);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const [randomWord, setRandomWord] = useState(
    allWords[getRandomIntegetFromInterval(0, allWords.length - 1)]
  );
  const [allWordsLength] = useState(quizWords.length);

  useEffect(() => {
    setRandomWord(() => {
      return allWords[getRandomIntegetFromInterval(0, allWords.length - 1)];
    });
    if (allWords.length === 0) {
      quizWords.forEach(item => toggleChecked(item.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords, getRandomIntegetFromInterval]);

  function getVariants() {
    // створили масив довжиною 4 де кожне значення null
    const variants = new Array(4).fill(null).reduce((acc, _, index) => {
      if (!index) {
        return [randomWord];
      }
      const random = words[getRandomIntegetFromInterval(0, words.length - 1)];
      if (acc.every(item => item?.id !== random?.id)) {
        return [...acc, random];
      } else {
        let word = null;
        for (let item of words) {
          if (acc.every(word => word?.id !== item?.id)) {
            word = item;
            break;
          }
        }
        return [...acc, word];
      }
    }, []);
    return shuffle(variants);
  }

  function chooseAnswer(choosenWord) {
    if (randomWord.id === choosenWord.id) {
      setCorrectAnswers(prev => prev + 1);
      setAllWords(prevState =>
        prevState.filter(word => word.id !== choosenWord.id)
      );
      return;
    }
    setAllWords(prevState =>
      prevState.filter(word => word.id !== randomWord.id)
    );
  }

  const pickedWords = getVariants();

  return (
    <div>
      {/* в масиві відчеканих щось є? */}
      {allWords.length ? (
        <h2
          style={{
            textAlign: 'center',
          }}
        >
          {!randomWord ? 'Your result is ' : randomWord.uaWord}
        </h2>
      ) : (
        <h1>Choose words in list</h1>
      )}
      {/* кількість відчеканих більше нуля? */}
      {!!allWordsLength && (
        <p>
          Your result is {correctAnswers}/{allWordsLength}
        </p>
      )}
      {!!allWords.length &&
        pickedWords.length === 4 &&
        pickedWords.map(word => {
          return (
            <Button
              style={{
                margin: '10px',
              }}
              key={word.id}
              variant="contained"
              onClick={() => chooseAnswer(word)}
            >
              {word.enWord}
            </Button>
          );
        })}
    </div>
  );
}

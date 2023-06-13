import { useState } from 'react';
import { Button } from '@mui/material';
import { GameComponent } from 'components/GameComponent/GameComponent';

export const Quiz = ({ toggleChecked, quizWords }) => {
  const [isStart, setIsStart] = useState(false);

  const getRandomIntegetFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleStartQuiz = () => {
    setIsStart(prev => !prev);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          style={{
            margin: '20px auto',
          }}
          variant="contained"
          onClick={handleStartQuiz}
        >
          Quiz 1
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isStart && (
          <GameComponent
            // quizWord={
            //   quizWords[getRandomIntegetFromInterval(0, quizWords.length - 1)]
            // }
            quizWords={quizWords}
            getRandomIntegetFromInterval={getRandomIntegetFromInterval}
            toggleChecked={toggleChecked}
          />
        )}
      </div>
    </>
  );
};

import { Routes, Route } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Quiz } from 'pages/Quiz';

export const App = () => {
  // const toggleChecked = id => {
  //   setWords(prevState =>
  //     prevState.map(word => {
  //       if (word.id === id) {
  //         return { ...word, checked: !word.checked };
  //       }
  //       return word;
  //     })
  //   );
  // };

  // const checkAllWords = status => {
  //   if (status === 'check') {
  //     setWords(prev =>
  //       prev.map(item => ({
  //         ...item,
  //         checked: true,
  //       }))
  //     );
  //     return;
  //   }
  //   setWords(prev =>
  //     prev.map(item => ({
  //       ...item,
  //       checked: false,
  //     }))
  //   );
  // };

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
              // toggleChecked={toggleChecked}
              // checkAllWords={checkAllWords}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
              // toggleChecked={toggleChecked}
              // quizWords={words.filter(word => word.checked)}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

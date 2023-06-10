import WordForm from 'components/WordForm/WordForm';
import WordsList from 'components/WordsList/WordsList';

export const Home = ({
  words,
  deleteWord,
  onFilterChange,
  filter,
  addWord,
  toggleChecked,
  editWord,
  checkAllWords,
}) => {
  const handleFilterWords = () => {
    return words.filter(word => {
      return (
        word.uaWord.toLowerCase().includes(filter.toLowerCase().trim()) ||
        word.enWord.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  };

  return (
    <>
      <WordForm addWord={addWord} />
      <WordsList
        words={handleFilterWords()}
        deleteWord={deleteWord}
        onFilterChange={onFilterChange}
        toggleChecked={toggleChecked}
        editWord={editWord}
        checkAllWords={checkAllWords}
      />
    </>
  );
};

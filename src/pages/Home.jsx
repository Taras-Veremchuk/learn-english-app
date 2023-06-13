import WordForm from 'components/WordForm/WordForm';
import WordsList from 'components/WordsList/WordsList';

export const Home = ({ toggleChecked, checkAllWords }) => {
  return (
    <>
      <WordForm />
      <WordsList toggleChecked={toggleChecked} checkAllWords={checkAllWords} />
    </>
  );
};

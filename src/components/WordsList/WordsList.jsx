export const WordList = ({ words }) => {
  return (
    <ul>
      {words.map(({ id, uaWord, enWord }) => (
        <li key={id}>
          <p>Ukrainian Word :{uaWord}</p>
          <p>English Word: {enWord}</p>
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

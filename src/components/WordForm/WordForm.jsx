import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
export const WordForm = ({ addWord }) => {
  const [uaWord, setUaWord] = useState('');
  const [enWord, setEnWord] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    const word = { id: nanoid(), uaWord, enWord };
    addWord(word);
  };

  const onInputChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'uaWord':
        setUaWord(value);
        break;
      case 'enWord':
        setEnWord(value);
        break;
      default:
        return;
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        maxWidth: '400px',
        flexDirection: 'column',
      }}
    >
      <TextField
        onInput={onInputChange}
        name="uaWord"
        label="Ukrainian Word"
        variant="standard"
      />
      <TextField
        onInput={onInputChange}
        name="enWord"
        label="English Word"
        variant="standard"
      />
      <Button type="submit" variant="contained">
        Add word
      </Button>
    </form>
  );
};

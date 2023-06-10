import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

export default function WordForm({ addWord }) {
  const [uaWord, setUaWord] = useState('');
  const [enWord, setEnWord] = useState('');

  const reset = () => {
    setUaWord('');
    setEnWord('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const word = {
      id: nanoid(),
      uaWord,
      enWord,
      checked: false,
    };
    console.log(word);
    addWord(word);
    reset();
  };

  const onInputChange = e => {
    const { name, value } = e.target;

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
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '400px',
      }}
      onSubmit={onSubmit}
    >
      <TextField
        onChange={onInputChange}
        name="uaWord"
        label="Ukrainian word"
        variant="standard"
        value={uaWord}
      />
      <TextField
        onChange={onInputChange}
        name="enWord"
        label="English word"
        variant="standard"
        value={enWord}
      />
      <Button type="submit" variant="contained">
        Add word
      </Button>
    </form>
  );
}

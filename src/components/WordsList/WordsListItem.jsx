import React, { useState } from 'react';
import { Td } from './WordsList.styled';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from 'redux/operations';
export default function WordsListItem({
  id,
  toggleChecked,
  checked,
  enWord: enWordProp,
  uaWord: uaWordProp,
  index,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [enWord, setEnWord] = useState(enWordProp);
  const [uaWord, setUaWord] = useState(uaWordProp);
  const dispatch = useDispatch();

  const handleDeleteWord = () => {
    dispatch(deleteWord(id));
  };
  const handleEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      dispatch(
        editWord({
          enWord,
          uaWord,
          id,
          checked,
        })
      );
      return;
    }
    setIsEdit(true);
  };

  return (
    <tr>
      <Td>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleChecked(id)}
        ></input>
      </Td>
      <Td>{index + 1}</Td>
      <Td>
        {isEdit ? (
          <TextField value={enWord} onChange={e => setEnWord(e.target.value)} />
        ) : (
          enWord
        )}
      </Td>
      <Td>
        {isEdit ? (
          <TextField value={uaWord} onChange={e => setUaWord(e.target.value)} />
        ) : (
          uaWord
        )}
      </Td>
      <Td>
        <Button
          onClick={handleDeleteWord}
          id={id}
          type="button"
          variant="contained"
        >
          Delete
        </Button>
      </Td>
      <Td>
        <Button onClick={handleEdit} id={id} type="button" variant="contained">
          {isEdit ? 'Save' : 'Edit'}
        </Button>
      </Td>
    </tr>
  );
}

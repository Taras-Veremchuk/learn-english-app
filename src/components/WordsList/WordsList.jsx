import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Table, Th, Head, Wrapper } from './WordsList.styled';
import WordsListItem from './WordsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/operations';
import { selectFilterValue, selectFilterdWords } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export default function WordsList() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);
  const filteredWords = useSelector(selectFilterdWords);
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  const [status, setStatus] = useState('check');

  const handleCheckAll = () => {
    if (status === 'check') {
      setStatus('uncheck');
      // checkAllWords(status);
      return;
    }
    setStatus('check');
    // checkAllWords(status);
  };

  return (
    <Wrapper>
      <TextField
        onChange={handleFilterChange}
        value={value}
        name="enWord"
        label="Search words"
        variant="standard"
      />
      <Table>
        <Head>
          <tr>
            <Th>
              <input onChange={handleCheckAll} type="checkbox"></input> All
            </Th>
            <Th>Number</Th>
            <Th>English words</Th>
            <Th>Ukrainian translate</Th>
            <Th>Actions</Th>
          </tr>
        </Head>
        <tbody>
          {filteredWords.map(({ id, uaWord, enWord, checked }, index) => (
            <WordsListItem
              key={id}
              id={id}
              uaWord={uaWord}
              enWord={enWord}
              checked={checked}
              index={index}
              // toggleChecked={toggleChecked}
            />
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

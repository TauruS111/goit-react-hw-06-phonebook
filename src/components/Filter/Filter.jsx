import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../slice/contactsSlice';
import { selectFilter } from '../../slice/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
};

import React, { useCallback, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import ConnectedBookView from 'containers/ConnectedBookView';

import { fetchBook } from 'store/book/thunks';

const ShowBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const bookId = parseInt(id);

  const handleClickDelete = useCallback(() => {
    history.push('/');
  }, [history]);

  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, [dispatch, bookId]);

  return <ConnectedBookView onClickDelete={handleClickDelete} />;
};

export default ShowBook;

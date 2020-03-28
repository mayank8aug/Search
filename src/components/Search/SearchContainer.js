import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentPage } from '../../actions';
// components
import Search from './Search';
import Pagination from '../Pagination/Pagination';

const SearchContainer = React.memo(() => {
  const searchState = useSelector(state => state.search);
  const { currentPage = 0, searchedData } = searchState;
  const dispatch = useDispatch();
  let total;
  if (searchedData) {
    total = Math.ceil(searchedData.length / 5); 
  }
  return (
    <div className="search-container display-flex align-items-center">
      <Search />
      {total > 1 &&
        <Pagination
          current={currentPage}
          total={total}
          navHandler={action => { dispatch(updateCurrentPage(currentPage + action))}}
        />
      }
    </div>
  );
});

export default SearchContainer;
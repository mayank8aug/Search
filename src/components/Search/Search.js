import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../actions';
import './Search.css';

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

let handleInput = function (query, dispatch) {
    dispatch(fetchData(query));
};

handleInput = debounce(handleInput, 200);

const Search = React.memo(() => {
    const dispatch = useDispatch();
    return (
        <div className="search">
            <input className="input-search" type="text" placeholder="Search word" onKeyUp={(ev) => { handleInput(ev.target.value, dispatch) }}/>
        </div>
    );
});

export default Search;
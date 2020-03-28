import React from 'react';
import './Pagination.css';

const Pagination = React.memo(props => {
    const { current, total, navHandler, showCurrent } = props;
    return (
        <div className="pagination display-flex align-items-center">
            {showCurrent && <span>{current + 1} OUT OF {total} RESULT</span>}
            <span className={`chevron left cursor-pointer${!current ? ' disabled' : ''}`} onClick={() => navHandler(-1)} />
            <span className={`chevron right cursor-pointer${current + 1 === total ? ' disabled' : ''}`} onClick={() => navHandler(1)} />
        </div>
    );
});

export default Pagination;
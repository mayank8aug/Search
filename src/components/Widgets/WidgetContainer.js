import React from 'react';
import { useSelector } from 'react-redux';
import Widgets from './Widgets';

const WidgetContainer = () => {
    const searchState = useSelector(state => state.search);
    const { loading, searchedData, fetchDataFail } = searchState;
    return (
        <div>
            {loading && <div>loading....</div>}
            {!loading && fetchDataFail && <div>Failed to fetch data... Please try again!</div>}
            {!loading && searchedData &&
                <React.Fragment>
                    {searchedData.length ?
                        <Widgets searchedData={searchedData} /> :
                        <div>No data found...Try with different keywords</div>

                    }
                </React.Fragment>
            }
        </div>
    )
}

export default WidgetContainer;
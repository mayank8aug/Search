import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSynonyms, fetchAntonyms } from '../../actions';
import WidgetHeader from './WidgetHeader';
import Definitions from './Definitions';
import SynonymsAntonyms from './SynonymsAntonyms';
import './Widget.css';

const Widget = React.memo(props => {
    const { data } = props;
    const { tag, tagText, word, defs } = data;
    const [showDefinition, setDefinitionShow] = useState(false);
    const searchState = useSelector(state => state.search);
    const { antonyms, synonyms } = searchState;
    const synonymsState = synonyms[word];
    const antonymsState = antonyms[word];
    const dispatch = useDispatch();

    useEffect(() => {
        if (!synonymsState) {
            dispatch(fetchSynonyms(word));
        }
        if (!antonymsState) {
            dispatch(fetchAntonyms(word));
        }
    }, [synonymsState, antonymsState, word, dispatch]);
    return (
        <div className="search-item">
            <WidgetHeader showDefinition={showDefinition} tag={tag} tagText={tagText} word={word} onClick={() => { setDefinitionShow(!showDefinition); }} />
            {showDefinition && <Definitions defs={defs} />}
            {
                // eslint-disable-next-line
                showDefinition && ((antonymsState && antonymsState.length > 0) || (synonymsState && synonymsState.length > 0)) &&
                <SynonymsAntonyms antonyms={antonymsState} synonyms={synonymsState} />
            }
        </div>
    );
});

export default Widget;
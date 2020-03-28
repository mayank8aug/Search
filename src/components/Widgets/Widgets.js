import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';

const Widgets = props => {
    const { searchedData } = props;
    const searchState = useSelector(state => state.search);
    const { currentPage = 0 } = searchState;
    const renderData = searchedData.slice(currentPage * 5, currentPage * 5 + 5);
    const tagTextObj = {
        N: 'Noun',
        V: 'Verb',
        A: 'Adjective'
    };
    let tagDefMap = {};
    let splitDef;
    let i;
    let len;
    let splitTag;
    let tagText;
    return (
        <div>
            {
                renderData.map((data, index) => {
                    const { tags, word, defs } = data;
                    tagDefMap = {};
                    if (tags && tags.length && defs && defs.length) {
                        for(i = 0, len = defs.length; i < len; i++) {
                            splitDef = defs[i].split('\t');
                            splitTag = splitDef[0].toUpperCase();
                            if (!tagDefMap[splitTag]) {
                                tagDefMap[splitTag] = [splitDef[1]]; 
                            } else {
                                tagDefMap[splitTag].push(splitDef[1]); 
                            }
                        }
                    }
                    return tags && tags.map(tag => {
                        tag = tag.toUpperCase();
                        tagText = tagTextObj[tag];
                        return (
                            <Widget key={`${index}-${tag}`} data={{ tag, tagText, word, defs: tagDefMap[tag] }} />
                        );
                    });
                })
            }
        </div>
    );
}

export default Widgets;
import React, { useState } from 'react';
import './Tabs.css';

const SynonymsAntonyms = React.memo(props => {
    const { synonyms, antonyms } = props;
    const tabsContent = {};
    if (synonyms && synonyms.length) {
        tabsContent.synonyms = synonyms;
    }
    if (antonyms && antonyms.length) {
        tabsContent.antonyms = antonyms;
    }
    const [renderTab, updateRenderTab] = useState(tabsContent.synonyms ? 'synonyms' : 'antonyms');
    const renderData = tabsContent[renderTab];

    return (
        <div className="tabs">
            <div className="tabs-header display-flex">
                {tabsContent.synonyms && <div className={`tabs-head${renderTab === 'synonyms' ? ' active' : ''}`} onClick={() => updateRenderTab('synonyms')}>Synonyms</div>}
                {tabsContent.antonyms && <div className={`tabs-head${renderTab === 'antonyms' ? ' active' : ''}`} onClick={() => updateRenderTab('antonyms')}>Antonyms</div>}
            </div>
            <div className="tabs-content">
                {
                    renderData && renderData.map((data, index) => {
                        return <a key={index} href="https://www.google.com">{data.word}</a>
                    })
                }
            </div>
        </div>
    );
});

export default SynonymsAntonyms;
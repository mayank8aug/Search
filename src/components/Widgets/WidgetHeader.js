import React from 'react';

const WidgetHeader = React.memo(props => {
    const { tag, tagText, word, onClick, showDefinition } = props;
    return (
        <div className="item-header display-flex align-items-center justify-space-between cursor-pointer" onClick={onClick}>
            <div className="display-flex flex-basis-30 align-items-center">
                {tag && <div className="item-tag">{tag}</div>}
                <div className="margin-l10 tag-text">
                    {tagText && <span>{tagText} - </span>}
                    {word && <span>{word}</span>}
                </div>
            </div>
            <span className={`chevron ${showDefinition ? 'top' : 'bottom'}`} />
        </div>
    );
});

export default WidgetHeader;
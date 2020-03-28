import React from 'react';

const DefinitionContent = React.memo(props => {
    const { definition } = props;
    return (
        <div className="def-content">
            {definition}
        </div>
    )
});

export default DefinitionContent;
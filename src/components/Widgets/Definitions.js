import React, { useState } from 'react';
import DefinitionContent from './DefinitionContent';
import Pagination from '../Pagination/Pagination';
import './Definitions.css';

const Definitions = React.memo(props => {
    const [currentDef, setCurrentDef] = useState(0);
    const { defs } = props;
    return (
        <div className="defs-container">
            {defs && defs.length > 0 ? <DefinitionContent definition={defs[currentDef]} /> : 'No Definitions Found'}
            {defs && defs.length > 1 && <Pagination showCurrent current={currentDef} total={defs.length} navHandler={action => { setCurrentDef(currentDef + action); }} />}
        </div>
    );
});

export default Definitions;